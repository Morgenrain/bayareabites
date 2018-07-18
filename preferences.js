var preferences = []

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

function getInfo(){
  var result = [];
  var choices = document.getElementsByClassName("active");
  for(var i=0;i<choices.length;i++){
    choice = choices[i];
    result.push(choice.id);
    return result;
  }
}

console.log(getInfo());
