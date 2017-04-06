console.log("working");

function switchText(){
    document.getElementById('important').innerHTML = "This is now important";
}

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

var settingBtn = document.getElementsByClassName('settingsBtn');

var swapContent = function(){
    document.getElementById('settings-content').innerHTML = "This is account info";
}

settingBtn.addEventListener('click', swapContent, false);