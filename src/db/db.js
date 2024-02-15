import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT3qC5GyOOhEJpvw3hdsYaF8Y2hvvHEno",
  authDomain: "autos-f7004.firebaseapp.com",
  projectId: "autos-f7004",
  storageBucket: "autos-f7004.appspot.com",
  messagingSenderId: "826750593290",
  appId: "1:826750593290:web:8b8726cc48c03cdafd72f3"
};


const appFirebase = initializeApp(firebaseConfig);

export default appFirebase
export const auth = getAuth(appFirebase)


