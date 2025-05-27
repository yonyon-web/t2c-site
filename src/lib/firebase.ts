// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCB4fGcC4NBcBvtZFgKY5zopJAJASkZufA",
    authDomain: "t2cproject-11057.firebaseapp.com",
    projectId: "t2cproject-11057",
    storageBucket: "t2cproject-11057.firebasestorage.app",
    messagingSenderId: "55243458095",
    appId: "1:55243458095:web:11412cc9871a00af8368da"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
