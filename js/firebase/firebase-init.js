import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


//내꺼-본인껄로 반드시 반드시 꼭 꼭 바꾸세요
const firebaseConfig = {
  apiKey: "AIzaSyBVew0R3j7uz8k44iwRIpV7rwZkzLWwOQw",
  authDomain: "auth-demo-de8d6.firebaseapp.com",
  projectId: "auth-demo-de8d6",
  storageBucket: "auth-demo-de8d6.firebasestorage.app",
  messagingSenderId: "250302164065",
  appId: "1:250302164065:web:3f1e8e9abb2d695b548e20",
  measurementId: "G-L1403GMMP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }