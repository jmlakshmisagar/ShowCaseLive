alert("Login/Signup through Google is recomended, Thank You!...")
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyB5X6niuz35JdPR6XHUt7YA54L94GaxemA",
    authDomain: "showcase-authentication.firebaseapp.com",
    projectId: "showcase-authentication",
    storageBucket: "showcase-authentication.appspot.com",
    messagingSenderId: "724542328428",
    appId: "1:724542328428:web:a14ea203f7ee02f3bcd249"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const database = getDatabase(app);

let loginButton = document.getElementById("Google");

loginButton.addEventListener('click', (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      // Capture username and email from user input (replace with your actual logic)
      const username = "user123";
      const email = "user@example.com";

      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email
      })
      .then(() => {
        alert(`Successful login! Welcome, ${user.displayName}!`);
        // Store user information in the Realtime Database
        storeUserInfo(user.uid, user.displayName, user.photoURL);
        setTimeout(() => {
          window.location.href = `Profile.html?uid=${user.uid}`;
        }, 1000);
      })
      .catch((error) => {
        console.error("Error storing data in the Realtime Database:", error);
      });

    })
    .catch((error) => {
      console.error("Error signing in with Google:", error);
    });
});

// Define the storeUserInfo function to store user information in the Realtime Database
function storeUserInfo(uid, displayName, photoURL) {
  // Implement your logic to store user information in the database
  // For example:
  const userRef = ref(database, 'users/' + uid);
  set(userRef, {
    displayName: displayName,
    photoURL: photoURL
  })
  .then(() => {
    console.log("User information stored successfully.");
  })
  .catch((error) => {
    console.error("Error storing user information:", error);
  });
};
 




















