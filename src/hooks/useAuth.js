import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, selectUser } from "../redux/userSlice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useAuth = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? dispatch(setCurrentUser(user.email)) : dispatch(setCurrentUser(null));
    });
    return unsubscribe;
  }, [dispatch]);
  return {
    currentUser,
    signup,
    login,
    logout,
  };
};
