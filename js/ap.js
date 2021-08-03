"use strict";

let nameof = prompt("what is your name")

alert("welcome to my web site: "+" "+nameof)

let name = prompt("is my name mohammad abdo ")
if (name !== null) {
    name = name.toLowerCase();
}
switch (name){
case 'yes':
case 'y':
    alert("good job its right")
    console.log('your answer right');
    break;
    case 'no':
    case 'n':
        alert("your answer is wrong")
        break;
        
}
let fact = prompt("do i hate fish")
if (fact !== null) {
    fact = fact.toLowerCase();
}
switch(fact){
    case 'yes':
    case 'y':
      alert("good job its right")
      console.log('your answer right');
      break;
      case 'no':
    case 'n':
        alert("your answer is wrong") 
        break;
}
let ltuc = prompt("do i love ltuc")
if (ltuc !== null) {
    ltuc = ltuc.toLowerCase();
}
switch(ltuc){
    case 'yes':
    case 'y':
      alert("good job its right")
      console.log('your answer right');
      break;
      case 'no':
    case 'n':
        alert("your answer is wrong") 
        break;
}
let study = prompt("do i study hard ")
if (study !== null) {
    study = study.toLowerCase();
}
switch(study){
    case 'yes':
    case 'y':
        alert("your answer is wrong") 
      break;
      case 'no':
    case 'n':
        alert("good job its right")
        console.log('your answer right');
        break;
}
let com = prompt("is my dream to have my own company")
if (com !== null) {
    com = com.toLowerCase();
}
switch(com){
    case 'yes':
    case 'y':
      alert("good job its right")
      console.log('your answer right');
      break;
      case 'no':
    case 'n':
        alert("your answer is wrong") 
        break;
}
