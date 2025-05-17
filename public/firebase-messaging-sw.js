// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
 

firebase.initializeApp({
    apiKey: "AIzaSyAZRK8uvr54UCxxiaPv29PdJOyhihh22xE",
    authDomain: "gtee-goal-tracker-rpl-kel6.firebaseapp.com",
    databaseURL: "https://gtee-goal-tracker-rpl-kel6-default-rtdb.firebaseio.com",
    projectId: "gtee-goal-tracker-rpl-kel6",
    storageBucket: "gtee-goal-tracker-rpl-kel6.firebasestorage.app",
    messagingSenderId: "203500947940",
    appId: "1:203500947940:web:c034c26698142a42c61ff1",
    measurementId: "G-PSVZ1KCVC7"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});