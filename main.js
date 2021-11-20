function login(){
    user_name= document.getElementById("name").value;
    firebase.database().ref("/").child(user_name).update({
        name=user_name
    });
    document.getElementById("name").value=" ";
    window.location="whatsnew.html"
}

var firebaseConfig = {
    apiKey: "AIzaSyDNZRpHjaXEsC2TVlH16CIIceRV2FBjysc",
    authDomain: "project-95-33b77.firebaseapp.com",
    projectId: "project-95-33b77",
    storageBucket: "project-95-33b77.appspot.com",
    messagingSenderId: "118423218938",
    appId: "1:118423218938:web:867883581f1f3370c33743"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById("label1").innerHTML=input1;