import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDx_jhy8cqCACCtJCgqd7WGYHfq7iZUfdA",
    authDomain: "world-singularity.firebaseapp.com",
    projectId: "world-singularity",
    storageBucket: "world-singularity.appspot.com",
    messagingSenderId: "813844869538",
    appId: "1:813844869538:web:06d0d3e05376c691f642fb",
    measurementId: "G-LQNW8JFH10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;