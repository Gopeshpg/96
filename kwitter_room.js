const firebaseConfig = {
    apiKey: "AIzaSyC2FqiDcBd0OL666nFH6l-KaD21hoAnJEE",
    authDomain: "welcome-9cp9.firebaseapp.com",
    databaseURL: "https://welcome-9cp9-default-rtdb.firebaseio.com",
    projectId: "welcome-9cp9",
    storageBucket: "welcome-9cp9.appspot.com",
    messagingSenderId: "911898221934",
    appId: "1:911898221934:web:4e94428fbe0377b7d8b57f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig); 



   user_name = localStorage.getItem("username");
   document.getElementById("user_name").innerHTML = "welcome"+user_name+"!";

   function add_room()
   {
         room_name = document.getElementById("room_name").value;

         localStorage.setItem("roomname",room_name);

         window.location="kwitter_page.html";
        
        firebase.database().ref("/").child(room_name).update({
                 purpose: "adding Room Name"

        });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach;
      Room_names = childkey;
           console.log("room_name - "+Room_names);
           row = "<div class='room name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+room_names+"</div><hr>";
           document.getElementById("output").innerHTML += row;
   });};

getData();
function redirectToroomname(name)
{
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location = "index.html";
}
