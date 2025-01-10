import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuU7JfMT8kh3EY-ELC_Rz0OtI4LRAdKhU',
  authDomain: 'crown-db-97a52.firebaseapp.com',
  projectId: 'crown-db-97a52',
  storageBucket: 'crown-db-97a52.firebasestorage.app',
  messagingSenderId: '1001124496300',
  appId: '1:1001124496300:web:7aa2067cf6c8a5b2ef7009',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithRedirect(auth, provider);
