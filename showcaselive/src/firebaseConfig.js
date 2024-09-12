import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import { getStorage, ref as storageRef, uploadBytes ,listAll, getDownloadURL} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js';
import { getDatabase, ref as databaseRef, get } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyB5X6niuz35JdPR6XHUt7YA54L94GaxemA",
    authDomain: "showcase-authentication.firebaseapp.com",
    projectId: "showcase-authentication",
    storageBucket: "showcase-authentication.appspot.com",
    messagingSenderId: "724542328428",
    appId: "1:724542328428:web:a14ea203f7ee02f3bcd249"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const database = getDatabase(firebaseApp);

export { storage, database, storageRef, uploadBytes, databaseRef, get,  listAll, getDownloadURL};
