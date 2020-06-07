//alert("hello");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;


function startOver(){

  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel)
{
if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
{console.log("success");

if(userClickedPattern.length === gamePattern.length)

   setTimeout(function(){nextSequence()},1000);}

 else {startOver();

 playSound("sounds/wrong.mp3");

 $().addClass("game-over");
 setTimeout(function(){

   $("body").removeClass("game-over");
 },200);

  $("#level-title").text("Game Over, Press Any Key to Restart");}
}

$(document).keypress(function(){

if(started === false) {
  $("#level-title").text("Level " + level);
  nextSequence();
  started = true;
}

});


$(".btn").click(function() {

var userChosenColour = $(this).attr("id");

userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);
});

function playSound(name)
{
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function nextSequence()
{   userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);
   var randomNumber = Math.floor(Math.random()*4);

   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}

function animatePress(currentColour)
{
$("#" + currentColour).addClass("pressed",);
setTimeout(function () {
   $("#" + currentColour).removeClass("pressed");
 }, 100);
}

$('.btn').keydown(function(event){

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		alert('You pressed a "enter" key in textbox');
	}

});
