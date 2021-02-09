import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAusOQdeJlsqaTTT_UXScgbug-KtQRJdM",
  authDomain: "flix-97e6f.firebaseapp.com",
  projectId: "flix-97e6f",
  storageBucket: "flix-97e6f.appspot.com",
  messagingSenderId: "235525540431",
  appId: "1:235525540431:web:f717fbabfa3522c57d783a",
  measurementId: "G-MH40N2VX1Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
