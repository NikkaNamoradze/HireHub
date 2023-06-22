import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/Login";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Registration from "./pages/Registration";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAL5Ix9BN2NOdPQrHmvVxKpUenaTn2C4Is",
    authDomain: "hirehub-9868c.firebaseapp.com",
    projectId: "hirehub-9868c",
    storageBucket: "hirehub-9868c.appspot.com",
    messagingSenderId: "670521351914",
    appId: "1:670521351914:web:386545344b6fbbed328193",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <>
      <Registration />
    </>
  );
}

export default App;
