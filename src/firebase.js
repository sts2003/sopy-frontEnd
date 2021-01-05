import firebase from "firebase";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apikey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();
//내장 함수들을 사용 가능하게 하기 위해 storageRef를 export함. 쉽게말해 모듈 만들기.

export default storageRef;
