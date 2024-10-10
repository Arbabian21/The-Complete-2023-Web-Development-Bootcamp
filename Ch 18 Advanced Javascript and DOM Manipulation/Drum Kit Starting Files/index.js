// Detect button click => event
for (var i = 0; i < document.querySelectorAll("button.drum").length; i++)
{
    // selector = buttons with class drum
    document.querySelectorAll("button.drum")[i].addEventListener("click", function()
    {
        // .classList is an array of the classses of a tag. the first tag is always the letter in our htmtl so I'm using that
        var letter = this.classList[0];
        buttonAnimation(letter);
        makeNoise(letter);
    });
}

// detect keyboard presses
document.addEventListener("keydown", function(event)
{
    buttonAnimation(event.key);
    makeNoise(event.key);
});

function makeNoise(key)
{
    var audio;
    switch(key)
    {
        case ('w'):
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case ('a'):
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case ('s'):
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case ('d'):
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case ('j'):
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case ('k'):
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
            
        case ('l'):
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        
        default:
            throw new Error("Something went wrong with the audio");
            break;
    }
}

function buttonAnimation(key)
{
    var tempClass = document.querySelector("." + key);
    
    tempClass.classList.add('pressed');
    setTimeout(function()
    {
        tempClass.classList.remove("pressed");
    }, 100);
}