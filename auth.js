import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCs4UZYglGy3qTrjy7Yq6Y_QFTSyjdlm1M",
    authDomain: "logxpert.firebaseapp.com",
    projectId: "logxpert",
    storageBucket: "logxpert.firebasestorage.app",
    messagingSenderId: "565677449939",
    appId: "1:565677449939:web:7b5d51f9a62a0fb886ea26"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SigninButton = document.getElementById("SignInbtn");
const SignoutButton = document.getElementById("SignOutbtn");

SignoutButton.style.display = "none";


const Signin = async()=>{
signInWithPopup(auth, provider)
.then((result)=>{
      
        const user = result.user
        console.log(user);
        alert("You have Sign in Successfuly!")
        
}).catch((error)=>{
    const Error = error.code;
    const errormessage = error.message;
})
}

const Signout = async()=>{
    signOut(auth).then((
        alert("You have Sign out Successfuly!")
        
    ))
    .catch((error) =>{

    })
}

onAuthStateChanged(auth, (user) =>{
    if(user){ 
        SignoutButton.style.display = "block";
    }else{
        SignoutButton.style.display = "none";
    }
});

SigninButton.addEventListener('click',Signin);
SignoutButton.addEventListener('click',Signout); 
