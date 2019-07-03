let myqueryURL = "https://api.themoviedb.org/4/search/movie?api_key=a22239c0a3a0a19a69effb094f260e6a"
let TVshowURL = "https://api.themoviedb.org/4/search/tv?api_key=a22239c0a3a0a19a69effb094f260e6a"
let firebaseConfig = {
  apiKey: "AIzaSyDdNeSGejyUNnUfuVViu5gTiGJ5Ur3Coco",
  authDomain: "our-group-project.firebaseapp.com",
  databaseURL: "https://our-group-project.firebaseio.com",
  projectId: "our-group-project",
  storageBucket: "our-group-project.appspot.com",
  messagingSenderId: "188419258236",
  appId: "1:188419258236:web:16bd2d51ed10d949"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();