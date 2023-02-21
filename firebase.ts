import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
