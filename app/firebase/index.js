import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCQ_feH-LmhIOHsche0aITZd0nMSmIStqY",
    authDomain: "rocvoc-todo-app.firebaseapp.com",
    databaseURL: "https://rocvoc-todo-app.firebaseio.com",
    storageBucket: "rocvoc-todo-app.appspot.com",
    messagingSenderId: "942985709338"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
