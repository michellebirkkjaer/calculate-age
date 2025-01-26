"use strict";


const birthYear = prompt("Indtast dit fødselsår:");

const currentYear = new Date().getFullYear();

const age = currentYear - parseInt(birthYear);

console.log(`Du er ${age} år gammel.`);