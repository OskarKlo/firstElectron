console.log("working");

buttonOne = document.getElementById('buttonOne');

buttonOne.addEventListener('click', function(){
  document.getElementById('important').innerHTML = "This is now important";
});
