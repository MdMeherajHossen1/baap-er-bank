document.getElementById('submit-login').addEventListener('click', function (){
    
  const userField = document.getElementById('user-email');
     const userEmail = userField.value;
//  getting user password
  const passwordField = document.getElementById('user-password');
    const  userPassword = passwordField.value;
   

  if(userEmail == 'aaa' && userPassword == 'aaa'){
      window.location.href = 'banking.html';
  }
}) 