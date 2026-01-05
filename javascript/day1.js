//swap two numbers 
let a=5
let b= 6
console.log("Before swap a:",a,"b:",b)
let temp=a
a=b
b=temp
console.log("After swap a:",a,"b:",b)

// even or odd 
let num=7;
if(num%2==0){
    console.log(num,"is even")
}
else{
    console.log(num,"nums is odd")
}

// max of two numbers 
let num1=0
let num2 =6
if(num1>num2){
    console.log(num1,"is greater")
}
else{
    console.log(num2,"is greater")
} 
// celcius to fehrenheit 
let celcius=37 
function toFaharenheit(celcius){
    let fahrenheit = (celcius * 9/5) + 32;
    console.log(celcius,"celcius is equal to",fahrenheit,"fahrenheit")
}
toFaharenheit(celcius)
