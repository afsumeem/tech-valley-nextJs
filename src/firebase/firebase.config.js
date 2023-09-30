import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.TECH_API_KEY,
  // authDomain: process.env.TECH_AUTH_DOMAIN,
  // projectId: process.env.TECH_PROJECTID,
  // storageBucket: process.env.TECH_STORAGE_BUCKET,
  // messagingSenderId: process.env.TECH_MESSAGING_SENDER_ID,
  // appId: process.env.TECH_APP_ID,

  apiKey: "AIzaSyC9gAwM7VFGkDTSDXcjZj1b_hFYt9ZuD24",
  authDomain: "tech-valley-f9a99.firebaseapp.com",
  projectId: "tech-valley-f9a99",
  storageBucket: "tech-valley-f9a99.appspot.com",
  messagingSenderId: "647932424383",
  appId: "1:647932424383:web:30ba8b86cfc2154eb1160a",
};

const app = initializeApp(firebaseConfig);

export default app;
