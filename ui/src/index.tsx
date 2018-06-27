import * as React from "react";
import * as ReactDOM from "react-dom";
import * as firebase from 'firebase/app';

import { Hello } from "./components/Hello";

const option = {
    apiKey: "AIzaSyDalHlgZOAyHeitdGq2eI_AodnvWdh3zTE",
    authDomain: "myplaygroundproject-904ee.firebaseapp.com",
    databaseURL: "https://myplaygroundproject-904ee.firebaseio.com",
    projectId: "myplaygroundproject-904ee",
    storageBucket: "myplaygroundproject-904ee.appspot.com",
    messagingSenderId: "349281556022"
};
const app = firebase.initializeApp(option);
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Hello compiler="TypeScript" framework="React" />,
        document.getElementById("example")
    );
});