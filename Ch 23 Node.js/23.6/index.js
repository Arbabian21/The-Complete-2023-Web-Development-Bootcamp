// var genereateName = require("sillyname");
import genereateName from "sillyname";
import superheroes, { randomSuperhero } from 'superheroes';

var sillyName = genereateName();
var name = randomSuperhero();

console.log(`My name is ${sillyName}`);
console.log(`I am ${name}`);
