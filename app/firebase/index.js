import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyC6CTLWrPho1JsueCn8RYaHzmRTfEdeeMs",
    authDomain: "todoapptest-7f7d3.firebaseapp.com",
    databaseURL: "https://todoapptest-7f7d3.firebaseio.com",
    storageBucket: "todoapptest-7f7d3.appspot.com",
    messagingSenderId: "5920321842"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();

export var firebaseRef = firebase.database().ref();
export default firebase;
