onst firebaseConfig = {
    apiKey: "AIzaSyC2FqiDcBd0OL666nFH6l-KaD21hoAnJEE",
    authDomain: "welcome-9cp9.firebaseapp.com",
    databaseURL: "https://welcome-9cp9-default-rtdb.firebaseio.com",
    projectId: "welcome-9cp9",
    storageBucket: "welcome-9cp9.appspot.com",
    messagingSenderId: "911898221934",
    appId: "1:911898221934:web:4e94428fbe0377b7d8b57f"
  };
  const app = initializeApp(firebaseConfig); 

  room_name = localStorage.getItem("roomname");
  user_name = localStorage.getItem("username");

  console.log("room name "+room_name);
  console.log("user name"+user_name);

  function logout()
  {
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location = "index.html";
  }

  function send()
  {
     msg = document.getElementById("msg").value;
     console.log("Message "+msg);
     firebase.database().ref(room_name).push({
       like: 0,
       message: msg,
       user_name: user_name
     });
     document.getElementById("msg").value = "";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();