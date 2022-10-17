const one=document.getElementById('one'),
two=document.getElementById('two'),
three =document.getElementById('three'),
four = document.getElementById('four'),
five =document.getElementById('five'), 
six = document.getElementById('six'),
seven= document.getElementById('seven'),
eight=document.getElementById('eight'),
nine=document.getElementById('nine'),
zero=document.getElementById('zero'),
dot=document.getElementById('dot'), 
divide=document.getElementById('divide'),
multiply=document.getElementById('multiply'),
subs=document.getElementById('subs'),
add=document.getElementById('add'),
clear=document.getElementById('clear'),
equal=document.getElementById('equal')
display=document.getElementById('display');

let num1, num2, num3;
let adding=false; 
let dividing= false; 
let substituting=false; 
let multiplying=false;   


document.addEventListener('click', function() {
    display.removeAttribute('disabled')
    
    
})

one.addEventListener('click', function() {
    display.value+=one.value
})
two.addEventListener('click', function() {
    display.value+=two.value
})
three.addEventListener('click', function() {
    display.value+=three.value
})
four.addEventListener('click', function() {
    display.value+=four.value
})
five.addEventListener('click', function() {
    display.value+=five.value
})
six.addEventListener('click', function() {
    display.value+=six.value
})
seven.addEventListener('click', function() {
    display.value+=seven.value
})
eight.addEventListener('click', function() {
    display.value+=eight.value
})
nine.addEventListener('click', function() {
    display.value+=nine.value
})
zero.addEventListener('click', function() {
    display.value+=zero.value
})

dot.addEventListener('click', function() {
    display.value+=dot.value; 
})

add.addEventListener('click', () => {
    num1 = +display.value
    console.log(num1)
    display.value = ``; 
    adding=true; 
    
})

subs.addEventListener('click', () => {
    num1 = +display.value
    console.log(num1)
    display.value = ``; 
    substituting=true; 
    
})



divide.addEventListener('click', () => {
    num1 = +display.value
    console.log(num1)
    display.value = ``; 
    dividing=true;
})

multiply.addEventListener ('click', () => {
    num1 = +display.value
    console.log(num1)
    display.value = ``; 
    multiplying=true; 
})


equal.addEventListener('click', () => {
    num2= +display.value;
    console.log(num2)
    display.value = ``;
    

    if(adding) {
        display.value = num1 + num2;
        substituting=false;
        dividing=false;
        multiplying=false; 
        console.log(`+`)
    } else if (substituting) {
        display.value = num1 - num2;
        adding=false;
        multiplying=false;
        dividing=false; 
        console.log(`-`)
    } else if(dividing) {
        display.value = num1 / num2;
        adding=false;
        substituting=false;
        multiplying=false; 
        console.log(`/`)
    } else if (multiplying) {
        display.value = num1 * num2;
        adding=false;
        substituting=false;
        adding=false; 
        console.log(`*`)
    }
})






clear.addEventListener('click', () => {
    display.value=``; 
    num1 = 0;
    num2=0;
    adding=false;
    substituting=false;
    multiplying=false;
    dividing=false; 
})

// https://www.youtube.com/watch?v=p3FfcJN6lrE&list=PLpwngcHZlPadhRwryAXw3mJWX5KH3T5L3&index=101

