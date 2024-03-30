// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa-l1QdXzFg6J4pI6Vry2x1ryqnnru_Dw",
  authDomain: "taskdaily-d1411.firebaseapp.com",
  projectId: "taskdaily-d1411",
  storageBucket: "taskdaily-d1411.appspot.com",
  messagingSenderId: "772758158102",
  appId: "1:772758158102:web:b51f8335859bdd446d6e37",
  measurementId: "G-VN79WB4TZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);