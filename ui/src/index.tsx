import * as firebase from 'firebase/app'

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
const config = {
    apiKey: "AIzaSyDalHlgZOAyHeitdGq2eI_AodnvWdh3zTE",
    authDomain: "myplaygroundproject-904ee.firebaseapp.com",
    databaseURL: "https://myplaygroundproject-904ee.firebaseio.com",
    projectId: "myplaygroundproject-904ee",
    storageBucket: "myplaygroundproject-904ee.appspot.com",
    messagingSenderId: "349281556022"
};
const app = firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', function () {
    try {
        ReactDOM.render(
            <Hello compiler="TypeScript" framework="React" />,
            document.getElementById("js-application-mountpoint")
        );

    } catch (e) {
        console.error(e);
    }
});