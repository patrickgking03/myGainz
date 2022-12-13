import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function InitiateSignIn() {
  try {
    const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
    const data = {
      name: user.displayName,
      uid: user.uid
    };
    const res = await setDoc(doc(db, "users", data.uid), data);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
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