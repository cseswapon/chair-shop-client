import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
const useFirebase = () => {
  initializeFirebase();
  const [users, setUsers] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  // google singin
  const googleSingin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUsers(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
      }
    });
  }, []);
  return {
    googleSingin,
    users,
  };
};
export default useFirebase;
