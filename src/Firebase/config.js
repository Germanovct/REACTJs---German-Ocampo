


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoOmPaj7xJdb25PIsggEEtFc4GUAXgU3o",
  authDomain: "reactjs---german-ocampo.firebaseapp.com",
  projectId: "reactjs---german-ocampo",
  storageBucket: "reactjs---german-ocampo.appspot.com",
  messagingSenderId: "1017015800871",
  appId: "1:1017015800871:web:625624952f96265b2b6a02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)