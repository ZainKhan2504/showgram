import { initializeApp, storage, firestore } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "showgram-c9ff8.firebaseapp.com",
  projectId: "showgram-c9ff8",
  storageBucket: "showgram-c9ff8.appspot.com",
  messagingSenderId: "335201256391",
  appId: "1:335201256391:web:ec04500429f54656c44fe2",
};

initializeApp(firebaseConfig);

const projectStorage = storage();
const projectFirestore = firestore();

export { projectStorage, projectFirestore };
