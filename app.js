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

userName.addEventListener('blur', registerInfo(userName));

function registerInfo(item){
    console.log("should work");
}

// Calculator Practice
// var textResults = document.getElementById('results');

// function addNumbers(item){
//     var results = item + 2;
//     console.log(results);
//     alert(results);
//     textResults.innerHTML = results;
// }