import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export function InitiateSignIn() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function InitiateSignOut() {
  return signOut(auth);
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}