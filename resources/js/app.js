import './bootstrap';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZRK8uvr54UCxxiaPv29PdJOyhihh22xE",
  authDomain: "gtee-goal-tracker-rpl-kel6.firebaseapp.com",
  databaseURL: "https://gtee-goal-tracker-rpl-kel6-default-rtdb.firebaseio.com",
  projectId: "gtee-goal-tracker-rpl-kel6",
  storageBucket: "gtee-goal-tracker-rpl-kel6.firebasestorage.app",
  messagingSenderId: "203500947940",
  appId: "1:203500947940:web:c034c26698142a42c61ff1",
  measurementId: "G-PSVZ1KCVC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    alert("Ada notifikasi baru");
});

getToken(messaging, { 
    vapidKey: 
    "BHwFBqDgczejV0EXfwK5bSKJaPZyZA08T9ZlibEiZ7-9YMYBYA0ZPcD_f7walxmxq09scY8GyZK7Td94uPXzhhA" 
    })
    .then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken);
    } else {
        // Show permission request UI
        requestPermission();
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
    }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
    });

function requestPermission(){
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            // TODO(developer): Retrieve a registration token for use with FCM.
            // ...
        } else {
            alert (
                "Silahkan izinkan notifikasi untuk mendapatkan notifikasi terbaru dari kami"
            )
        }
        });
}
