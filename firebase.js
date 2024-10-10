import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0Wp-DZHfE80k6E60Cxt9ziTT8TnxyVb8", 
  authDomain: "shinecity-form.firebaseapp.com",
  databaseURL: "https://shinecity-form-default-rtdb.firebaseio.com",
  projectId: "shinecity-form",
  storageBucket: "shinecity-form.appspot.com",
  messagingSenderId: "448829430335",
  appId: "1:448829430335:web:9daf36d4d9d1ea5681b68a",
  measurementId: "G-L33X470NCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore, Realtime Database, and Auth
const firestore = getFirestore(app);
const realtimeDatabase = getDatabase(app);
const auth = getAuth(app);

// Initialize Analytics (only in supported environments)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.log("Analytics not supported in this environment:", error);
  });
}

export { app, firestore, realtimeDatabase, auth, analytics };
