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
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  // email password singUp
  const registerEmail = (email, password, name, location, history) => {
    setIsLoading(true);
    const uri_redirect = location?.state?.from || "/home";
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        // database added
        saveData(email, name, "post");
        // added name
        setUsers(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        const user = result.user;
        history.replace(uri_redirect);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // google login
  const googleSingin = (location, history) => {
    setIsLoading(true);
    const uri_redirect = location?.state?.from || "/home";
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUsers(user);
        saveData(user.email, user.displayName, "PUT");
        history.replace(uri_redirect);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // Login
  const logIn = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const uri_redirect = location?.state?.from || "/";
        history.replace(uri_redirect);
        setError(" ");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // addmin

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${users.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      })
      .finally(() => setIsLoading(false));
  }, [users.email]);

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
  // save database
  const saveData = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
    admin,
  };
};
export default useFirebase;
