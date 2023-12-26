import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApi6x15MOYVY0c7LujCoU-JFYUKOcPECw",
  authDomain: "banquanao-9f416.firebaseapp.com",
  projectId: "banquanao-9f416",
  storageBucket: "banquanao-9f416.appspot.com",
  messagingSenderId: "246689432833",
  appId: "1:246689432833:web:6afe42b7d2e0b302558700",
  measurementId: "G-4RR92P3RSE",
};

// Khởi tạo ứng dụng Firebase
firebase.initializeApp(firebaseConfig);

// Optional: Khởi tạo các dịch vụ Firebase cần thiết khác như Firestore, Authentication, Storage, ...

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
