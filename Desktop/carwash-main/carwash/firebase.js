// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore SDK
import { getDatabase } from "firebase/database"; // Realtime Database SDK
import { getAuth } from "firebase/auth"; // Firebase Auth (optional)
import { getAnalytics, isSupported } from "firebase/analytics"; // Firebase Analytics

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

// Export Firestore instance
const firestore = getFirestore(app); // Firestore instance
const realtimeDatabase = getDatabase(app); // Realtime Database instance
const auth = getAuth(app); // Firebase Auth (optional)

// Initialize Analytics (only if supported and in the browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, firestore, realtimeDatabase, auth, analytics };
