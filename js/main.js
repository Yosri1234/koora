 (function(){
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDWxwo0mRuT2S6mRWxqGjPBcH7wBEJ_BZo",
    authDomain: "signin-e1106.firebaseapp.com",
    databaseURL: "https://signin-e1106.firebaseio.com",
    projectId: "signin-e1106",
    storageBucket: "signin-e1106.appspot.com",
    messagingSenderId: "739587736649"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail= document.getElementById('txtEmail');
  const Password= document.getElementById('txtPassword');
  const btnLogin= document.getElementById('Login');
  const btnSignUp= document.getElementById('btnSignUp'); 
  const btnLogout= document.getElementById('btnLogout');

  //add login event
  btnlogin.addEventListener('click',e =>{
      //get email and pass
      const email=txtEmail.value;
      const pass=txtPassword.value;
      const auth=firebase.auth();
      //Sign in
      const promise=auth.signInWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));
      });
  //add Sign up event
   btnSignUp.addEventListener('click', e =>{
   //get email and pass
   const email=txtEmail.value;
   const pass=txtPassword.value;
   const auth=firebase.auth();
   //Sign in
   const promise=auth.createUserWithEmailAndPassword(email,pass);
   promise.catch(e => console.log(e.message));
   });

   btnLogout.addEventListener('click',e =>{
       firebase.auth().signOut();
      })

   //add real time Listener
   firebase.auth().onAuthStateChanged(firebaseUser =>{
       if(firebaseUser){
           console.log(firebaseUser);
           btnLogout.classList.remove('hide');
       }else{
           console.log('not logged in');
           btnLogout.classList.add('hide');
       }
   })
   

}());