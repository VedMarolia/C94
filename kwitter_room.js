
var firebaseConfig = {
      apiKey: "AIzaSyBAqRdZsBSe0YHRGyWK7gH25czpjfSJLls",
      authDomain: "kwitter-b5a9d.firebaseapp.com",
      databaseURL: "https://kwitter-b5a9d-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5a9d",
      storageBucket: "kwitter-b5a9d.appspot.com",
      messagingSenderId: "385909744313",
      appId: "1:385909744313:web:b36d1d742f031cb5e17168"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
