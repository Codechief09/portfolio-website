// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyClBb02-aapwSaIksLhsphOs0H79nrs6pI",
	authDomain: "portfolio-website-0001.firebaseapp.com",
	projectId: "portfolio-website-0001",
	storageBucket: "portfolio-website-0001.appspot.com",
	messagingSenderId: "215239439549",
	appId: "1:215239439549:web:c2999e2c0504f9b44333d4",
	measurementId: "G-TWQV1C1TB8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);