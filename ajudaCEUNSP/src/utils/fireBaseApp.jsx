import * as firebase from "firebase/app";
import * as firebaseDB from "firebase/database";
import { firebaseConfig } from "../config/fireBaseConfig.jsx";
export const app = firebase.initializeApp(firebaseConfig);
export const database = firebaseDB.getDatabase(app);
