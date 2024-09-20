import * as firebase from "firebase/app";
import { firebaseConfig } from "../../../config/fireBaseConfig";
export const app = firebase.initializeApp(firebaseConfig);
