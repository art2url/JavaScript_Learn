//Check the login

//Write the code which asks for a login with prompt.

//If the visitor enters "Admin", then prompt for a password, 
//if the input is an empty line or Esc – show “Canceled”, 
//if it’s another string – then show “I don’t know you”.

//The password is checked as follows:
//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”

let userName = prompt('Who is there?', '');
if (userName == 'admin') {
  let passWord = prompt('Enter the password', '');
  if (passWord == 'pass') {
    alert('Hello!');
  } else if (passWord = '' || passWord == null) {
    alert('Cancelled');
  } else {
    alert('Wrong password');
  }
  ////
} else if (userName == '' || userName == null) {
  alert('Cancelled');
} else {
  alert('I dont know you');
}
