import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCudkjudC10QsO6duesT9Ny7BeART1WF0Q",
  authDomain: "restaurantapp-bbc02.firebaseapp.com",
  databaseURL: "https://restaurantapp-bbc02-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-bbc02",
  storageBucket: "restaurantapp-bbc02.appspot.com",
  messagingSenderId: "725517677350",
  appId: "1:725517677350:web:cfb3299d70cfaf34b187e7",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};