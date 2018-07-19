window.onload=hide();

function hide(){
  document.getElementById('meal').style.visibility = "hidden";
  document.getElementById('mood').style.visibility = "hidden";
  document.getElementById('prices').style.visibility = "hidden";
  document.getElementById('submit').style.visibility = "hidden";
}

function showMeal(){
  document.getElementById('meal').style.visibility = "visible";
}

function showMood(){
  document.getElementById('mood').style.visibility = "visible";
}

function showPrices(){
  document.getElementById('prices').style.visibility = "visible";
}

function showButton(){
  document.getElementById('submit').style.visibility = "visible";
}

var preferences = [];
var choices = document.getElementsByClassName("active");

function get(){
  console.log(choices);
  for (var i = 0; i < choices.length; i++) {
      preferences.push(choices[i].id);
  }
  alert(preferences);
}
