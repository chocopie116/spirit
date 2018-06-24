import * as firebase from 'firebase'

// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { Hello } from "./components/Hello";
// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );
document.addEventListener('DOMContentLoaded', function () {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    try {
        const config = {
            apiKey: "AIzaSyDalHlgZOAyHeitdGq2eI_AodnvWdh3zTE",
            authDomain: "myplaygroundproject-904ee.firebaseapp.com",
            databaseURL: "https://myplaygroundproject-904ee.firebaseio.com",
            projectId: "myplaygroundproject-904ee",
            storageBucket: "myplaygroundproject-904ee.appspot.com",
            messagingSenderId: "349281556022"
        };
        firebase.initializeApp(config);
        const app = firebase.app();
        console.log(app);
    } catch (e) {
        console.error(e);
    }
});