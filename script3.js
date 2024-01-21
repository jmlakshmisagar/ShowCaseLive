
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


    const firebaseConfig = {
        apiKey: "AIzaSyB5X6niuz35JdPR6XHUt7YA54L94GaxemA",
        authDomain: "showcase-authentication.firebaseapp.com",
        projectId: "showcase-authentication",
        storageBucket: "showcase-authentication.appspot.com",
        messagingSenderId: "724542328428",
        appId: "1:724542328428:web:a14ea203f7ee02f3bcd249"
      };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    console.log(firebase);