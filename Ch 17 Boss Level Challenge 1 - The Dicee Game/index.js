var randomNumber1 = Math.ceil(Math.random() * 6);
switch(randomNumber1)
{
    case 1:
        document.querySelector("img.img1").setAttribute("src", "./images/dice1.png")
        break;
    case 2:
        document.querySelector("img.img1").setAttribute("src", "./images/dice2.png")
        break;
    case 3:
        document.querySelector("img.img1").setAttribute("src", "./images/dice3.png")
        break;
    case 4:
        document.querySelector("img.img1").setAttribute("src", "./images/dice4.png")
        break;
    case 5:
        document.querySelector("img.img1").setAttribute("src", "./images/dice5.png")
        break;
    case 6:
        document.querySelector("img.img1").setAttribute("src", "./images/dice6.png")
        break; 
}

var randomNumber2 = Math.ceil(Math.random() * 6);
switch(randomNumber2)
{
    case 1:
        document.querySelector("img.img2").setAttribute("src", "./images/dice1.png")
        break;
    case 2:
        document.querySelector("img.img2").setAttribute("src", "./images/dice2.png")
        break;
    case 3:
        document.querySelector("img.img2").setAttribute("src", "./images/dice3.png")
        break;
    case 4:
        document.querySelector("img.img2").setAttribute("src", "./images/dice4.png")
        break;
    case 5:
        document.querySelector("img.img2").setAttribute("src", "./images/dice5.png")
        break;
    case 6:
        document.querySelector("img.img2").setAttribute("src", "./images/dice6.png")
        break; 
}

switch(true)
{
    case (randomNumber1 === randomNumber2):
        document.querySelector("h1").textContent = "🚩Draw!🚩";
        break;
    case (randomNumber1 < randomNumber2):
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
        break;
    case (randomNumber1 > randomNumber2):
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";
        break;
}