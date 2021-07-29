// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCL0HEMDKxXDb-fAeE_2C9oMWhQROH3tUE",
    authDomain: "hamlet-5e892.firebaseapp.com",
      databaseURL: "https://hamlet-5e892-default-rtdb.firebaseio.com/",
    projectId: "hamlet-5e892",
    storageBucket: "hamlet-5e892.appspot.com",
    messagingSenderId: "656208107328",
    appId: "1:656208107328:web:fe3be477f8ad41592f8ca5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("Username");
room_name=localStorage.getItem("room_name");
function Send(){
    msg=document.getElementById("send").value;
    firebase.database().ref(room_name).push({
        name:user_name, message:msg, like:0
    });
    document.getElementById("send").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
//End code
  } });  }); }
getData();


function Logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("room_name");
    window.location="index.html";  
}