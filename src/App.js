// App.js
import { useEffect } from "react";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Auth from "./components/Auth";
import Todo from "./components/Todo";
import FileUpload from "./components/FileUpload";

const App = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user); // 사용자 인증 정보가 변경될 때마다 해당 이벤트를 받아 처리합니다.
    });
  }, []);

  return (
    <div className="App">
      <Auth />
      <Todo />
      <FileUpload />
    </div>
  );
};

export default App;
// // App.js
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { useEffect, useState } from "react";
// import "./App.css";
// import { auth } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebase";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       console.log(user);
//     });

//     // 현재 로그인한 유저의 정보를 확인 가능
//     // auth.currentUser
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const querySnapshot = await getDocs(collection(db, "users"));
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//       });
//     };
//     fetchData();
//   }, []);

//   const onChange = (event) => {
//     const {
//       target: { name, value },
//     } = event;
//     if (name === "email") {
//       setEmail(value);
//     }
//     if (name === "password") {
//       setPassword(value);
//     }
//   };

//   // 회원가입
//   const signUp = async (event) => {
//     event.preventDefault();

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     }
//   };

//   // 로그인
//   const signIn = async (event) => {
//     event.preventDefault();

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("user sighIn", userCredential.user);
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("error with signIn", errorCode, errorMessage);
//     }
//   };

//   // 로그아웃
//   const logOut = async (event) => {
//     event.preventDefault();
//     await signOut(auth);
//   };

//   return (
//     <div className="App">
//       <h2>로그인 페이지</h2>
//       <form>
//         <div>
//           <label>이메일 : </label>
//           <input
//             type="email"
//             value={email}
//             name="email"
//             onChange={onChange}
//             required
//           ></input>
//         </div>
//         <div>
//           <label>비밀번호 : </label>
//           <input
//             type="password"
//             value={password}
//             name="password"
//             onChange={onChange}
//             required
//           ></input>
//         </div>
//         <button onClick={signUp}>회원가입</button>
//         <button onClick={signIn}>로그인</button>
//         <button onClick={logOut}>로그아웃</button>
//       </form>
//     </div>
//   );
// };

// export default App;
