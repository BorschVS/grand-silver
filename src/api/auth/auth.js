// import { useEffect, useState } from "react";
// import { getAuth, signInWithPopup } from "firebase/auth";
// import { app, googleAuthProvider } from "./firebase";

// export const AuthProvider = () => {
//   const auth = getAuth(app);
//   const [user, setUser] = useState(auth.currentUser);

//   useEffect(() => {
//     const unsub = auth.onAuthStateChanged((isUser) => {
//       if (isUser !== null) {
//         return setUser(isUser);
//       }
//       signInWithPopup(auth, googleAuthProvider)
//         .then((credentials) => {
//           setUser(credentials.user);
//         })
//         .catch((e) => {
//           throw new Error("Помилка авторизації");
//         });
//     });

//     return unsub;
//   }, [auth]);

//   return user ? <>{user.displayName}</> : <span>loading</span>;
// };
