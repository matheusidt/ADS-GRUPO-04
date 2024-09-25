import * as firebase from "firebase/app";
import { firebaseConfig } from "../config/fireBaseConfig.jsx";
export const app = firebase.initializeApp(firebaseConfig);
