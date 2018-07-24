window.onload=hide();

function hide(){
  document.getElementById('meal').style.visibility = "hidden";
  document.getElementById('mood').style.visibility = "hidden";
  document.getElementById('prices').style.visibility = "hidden";
  document.getElementById('submit').style.visibility = "hidden";
}

function hidetriple(){
  var choices = document.getElementsByClassName('active');
  var array = [];
  for (var i = 0; i < choices.length; i++) {
      array.push(choices[i].id);
  }
  if ((array.includes('breakfast')) || (array.includes('snack'))) {
      document.getElementById('$$$').style.visibility = "hidden";
  }
}

function showMeal(){
  document.getElementById('meal').style.visibility = "visible";
}

function showMood(){
  document.getElementById('mood').style.visibility = "visible";
}

function showPrices(){
  document.getElementById('$$$').type = "hidden";
  document.getElementById('prices').style.visibility = "visible";

}

function showButton(){
  document.getElementById('submit').style.visibility = "visible";
}

var preferences = [];
var choices = document.getElementsByClassName("active");

function get(){
  for (var i = 0; i < choices.length; i++) {
      preferences.push(choices[i].id);
  }
  localStorage.setItem('preferences', preferences);
}
