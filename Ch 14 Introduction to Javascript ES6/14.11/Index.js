var name = prompt("What is your name?");
name.toLowerCasse();

var firstChar = name.splice(0,1)
var upperCase = firstChar.toUpperCase();

name = firstChar + name.splice(1, name.length);

alert("Hello " + name)