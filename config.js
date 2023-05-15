// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAl1WB8Uq8hxRdY6i74cuDSqqudH_W-wpY',
  authDomain: 'fdsproject-430e7.firebaseapp.com',
  projectId: 'fdsproject-430e7',
  storageBucket: 'fdsproject-430e7.appspot.com',
  messagingSenderId: '644771419997',
  appId: '1:644771419997:web:80f21923961986a4547ab4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
