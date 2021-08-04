"use strict";
let counter =0

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
    counter++
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
      counter++
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
        counter++
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
        counter++
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
      counter++
      break;
      case 'no':
    case 'n':
        alert("your answer is wrong") 
        break;
}


let q6 =prompt("Number guessing game");

for(let i=0;i<4;i++){
    
    if(q6>5){
        console.log('too high');
        alert('too high');
    }else if(q6<5){
        alert('too low');
    }else if(q6==5){
        alert("greate job")
        counter++
    }
    q6 =prompt("Number guessing game")
}
alert("the correct answer is 5")

let guessed = false;
let car = ['camry', 'hyundai', 'Kia'];
let answer = prompt('enter a car type');
for(let j=0;j<6;j++){
    for (let i = 0; i < car.length; i++) {
        if (answer === car[i]) {
            alert("yes its true");
            guessed = true;
            counter++
            
        }

    }
if(guessed==true){
    break;
}else{
alert("try again")
answer = prompt('enter a car type');
}

}
alert(" the correct answer is:  "+"  "+car)
alert("your final score is: "+ counter)
