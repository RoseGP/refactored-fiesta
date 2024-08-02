
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"//from "firebase/app";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js"  //from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need

//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0joDXIiY5F4ctKVlmHB70ug7EQtojSmw",
    authDomain: "web-design-d1241.firebaseapp.com",
    databaseURL: "https://web-design-d1241-default-rtdb.firebaseio.com",
    projectId: "web-design-d1241",
    storageBucket: "web-design-d1241.appspot.com",
    messagingSenderId: "684497900079",
    appId: "1:684497900079:web:75325b8891c8c80c40ecda",
    measurementId: "G-RGG5ETD746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

