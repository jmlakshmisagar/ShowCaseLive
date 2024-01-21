// upload.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js';

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

document.getElementById('uploadButton').addEventListener('click', async () => {
    const fileInput = document.querySelector("#imageInput");

    if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const storageRef = ref(storage, 'images/' + file.name);
        const metadata = {
            contentType: file.type
        };

        try {
            const snapshot = await uploadBytes(storageRef, file, metadata);
            const url = await getDownloadURL(snapshot.ref);

            console.log(url);
            alert("Image Uploaded...");
            const imageElement = document.querySelector('#imagePreview');
            imageElement.src = url;
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error("File input not found or no files selected");
    }
});
