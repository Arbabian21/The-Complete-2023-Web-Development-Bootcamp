var tweet = prompt("Compose your tweet:");
var count = tweet.length;
var tweet140 = tweet.slice(0,140);

alert("You have written " + count + " characters, you have " + (140 - count) + " characters remaining");

tweet.slice(0, 12); // basically substring

