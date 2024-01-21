// main.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import { getStorage, ref, listAll, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js';


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

async function fetchAndDisplayImages() {
    console.log('Fetching and displaying images...');
    const storageRef = ref(storage, 'images');

    try {
        const storageList = await listAll(storageRef);
        const imagesContainer = document.getElementById('Images');

        console.log('Number of items in storageList:', storageList.items.length);

        storageList.items.forEach(async (item) => {
            const downloadURL = await getDownloadURL(item);

            console.log('Download URL:', downloadURL);

            // Create an image element and append it to the container
            const imgElement = document.createElement('img');
            imgElement.src = downloadURL;
            imagesContainer.appendChild(imgElement);

            console.log('Image added:', downloadURL);
        });

        console.log('Images fetched and displayed successfully.');
    } catch (error) {
        console.error('Error fetching and displaying images:', error);
    }
}

