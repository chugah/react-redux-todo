import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCQ_feH-LmhIOHsche0aITZd0nMSmIStqY",
    authDomain: "rocvoc-todo-app.firebaseapp.com",
    databaseURL: "https://rocvoc-todo-app.firebaseio.com",
    storageBucket: "rocvoc-todo-app.appspot.com",
    messagingSenderId: "942985709338"
};
firebase.initializeApp(config);


var firebaseRef = firebase.database().ref();

firebaseRef.set({
  	app: {
  		name: 'Todo App',
  		version: '1.0'
  	},
  	isRunning: true,
  	user: {
  		name: 'Rock',
  		age: 30
  	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Get the mail'
});

todosRef.push({
  text: 'Go for a walk'
});
// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
//   text: 'Walk the dog'
// });

// console.log('Todo id', newNoteRef.key);


