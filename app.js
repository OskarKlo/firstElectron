console.log("working");

function accountCont(){
    document.getElementById('settings-content').innerHTML = "This is account info";
    document.getElementById('settings-heading').innerHTML = "Account";
};
function bioCont(){
    document.getElementById('settings-content').innerHTML = "This is bio info";
    document.getElementById('settings-heading').innerHTML = "Bio";
};
function planCont(){
    document.getElementById('settings-content').innerHTML = "This is plan info";
    document.getElementById('settings-heading').innerHTML = "Plan";
};
function emailCont(){
    document.getElementById('settings-content').innerHTML = "This is email and password info";
    document.getElementById('settings-heading').innerHTML = "Email & Password";
};

var userName = document.getElementById('userName');
var passWord = document.getElementById('passWord');
var signInBtn = document.getElementById('');

function userInfo(){
    console.log(userName);
    console.log(passWord);
    var passLength = length.passWord;
    console.log(passLength);
    // if (passLength > 6) {
    //     console.log("Password is Good");
    //  } else {
    //     console.log("Your password is too short!");
    //  }
}

// userName.addEventListener('blur', function(){
//     if (userName === null){
//         alert("it is empty");
//     } else {
//         alert("That is a username");
//     }
//     // alert("It blured");
//     // in this function,
//     // take the userName and pass it
// });

// Delegating events on a ul list
// list.addEventListener("click", function(e){
//  if (e.currentTarget.tagName == "li") {
//  /* ... */
//  return false;
//  }
// }, false);