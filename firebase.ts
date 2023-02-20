import { getAop, getApps, initializeApp } from "firebase/app";
import { getFireStore } from "firebases/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTwIiheigYfGmWx6oxfqLsnNYYgqbD15M",
  authDomain: "chatgpt-bot-a65ea.firebaseapp.com",
  projectId: "chatgpt-bot-a65ea",
  storageBucket: "chatgpt-bot-a65ea.appspot.com",
  messagingSenderId: "1064734594579",
  appId: "1:1064734594579:web:68f606078f4d3f27cd91e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
