var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(document).on("keydown", function ()
{
    if(started === false)
        {
            started = true;
            $("#level-title").text("Level " + level);
            nextSequence();
        }
});

$(".btn").on("click", function ()
{
    var userChosenColor = $(this).attr("id"); 
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence()
{
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    $("#" + randomChosenColor).fadeOut(250).fadeIn(250); 

    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
}

function playSound(name)
{
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () 
    {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        if(gamePattern.length === userClickedPattern.length)
            setTimeout(nextSequence(), 1000);
        // else
        //  {
        //     playSound("wrong");
        //     $("body").addClass("game-over");
        //     $("h1").text("GAME OVER, PRESS ANY KEY TO TRY AGAIN");
        //     setTimeout(function ()
        //     {
        //         $("body").removeClass("game-over");
        //     }, 200);
        //     started = false;
        //     level = 0;
        //     gamePattern = [];
        // }
    }
  else
  {
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("GAME OVER, PRESS ANY KEY TO TRY AGAIN");
    setTimeout(function ()
    {
        $("body").removeClass("game-over");
    }, 200);
    started = false;
    level = 0;
    gamePattern = [];
  }
}