import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "AIzaSyCGJxBPBT97eklr1C6-FmIOn9oHlTGaNuY",
  authDomain: "carrot-market-dodo.firebaseapp.com",
  databaseURL:
    "https://carrot-market-dodo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-dodo",
  storageBucket: "carrot-market-dodo.appspot.com",
  messagingSenderId: "164911656119",
  appId: "1:164911656119:web:6d9247467741bc19977132",
  measurementId: "G-92RR7601KH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
