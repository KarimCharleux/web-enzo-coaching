import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjotQ952tJm8PUVi3s033shzfr5SBP8pI",
  authDomain: "enzocoaching07.firebaseapp.com",
  projectId: "enzocoaching07",
  storageBucket: "enzocoaching07.appspot.com",
  messagingSenderId: "452761107875",
  appId: "1:452761107875:web:fdfa89e5feefe191e12e16",
  measurementId: "G-2DNBXGQ48X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
