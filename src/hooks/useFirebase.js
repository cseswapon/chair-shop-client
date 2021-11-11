import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
const useFirebase = () => {
  initializeFirebase();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  // email password singUp
  const registerEmail = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUsers(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        const user = result.user;
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // google login
  const googleSingin = (location, history) => {
    setIsLoading(true);
    const uri_redirect = location?.state?.from || "/home";
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUsers(user);
        history.push(uri_redirect);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // Login
  const logIn = (email, password, location, history) => {
    setIsLoading(true);
    const uri_redirect = location?.state?.from || "/home";
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const user = userCredential.user;
        setUsers(user);
        history.push(uri_redirect);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
      }
      setIsLoading(false);
    });
  }, []);
  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers("");
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    googleSingin,
    users,
    error,
    registerEmail,
    logOut,
    isLoading,
    logIn,
  };
};
export default useFirebase;
