// Q One


var num=Number(prompt("Enter A number."))
 

var newNumbr= num%3
var formula = "&deg;F"

if(num % 3==0){
    document.write(num+" divisible by 3 , " + newNumbr+"&deg;C")
}
else{
    alert("Number is not divisible by 3 ")
}



// Q Two 

var num=Number(prompt("Enter A number"))

var formula= (num*9/5) + 32

var formula2 =  (num-32) * 5/9

if(num / 2){
   document.write(formula+"&deg;C" +"  is A current weater")
}
else(
    document.write(formula2 +"&deg;C"+ " is a current weater")
)



// Q three


var num=Number(prompt(" Enter your age"))

if(num > 18){
    alert("Old enough")
}
else(
    alert("Too young")
)


// Q four

var userName= prompt("type your name")

if(userName){
    alert("Hello "+ userName + " Nice to Meet you")
}



// Q five 


var num=Number(prompt("Enter A number."))

var newNumbr= num%3

if(num % 3==0){
    alert("Number is devisible by 3")
}
else{
    alert("Number is not divisible by 3 ")
}


// Q six

var num=Number(prompt("Enter a any number for uppercase letter or lower case letter"))

if(num>=65 && num<=90)(
    alert("THIS NUMBER FOR UPPERCASE LETTERS")
)
else if(num>=97 && num<=122)(
    alert("THIS NUMBER FOR LOWER CASE LETTERS")
)
else(
    alert("please enter num from 65 to 122 for chek the letters")
)




// Q seven


var num=Number(prompt("Enter a any number"))
var oprater=prompt("Enter oprater for second numbr")
var num2=Number(prompt("Enter a second number"))

var plus= num + num2
var minus= num - num2
var multiply= num * num2
var devide= num / num2
var reminder= num % num2


if(oprater === "+"){
    alert("Result  is " + plus)
}
else if(oprater === "-"){
    alert("Result  is " + minus)
}
else if(oprater === "*"){
    alert("Result  is " + multiply)
}
else if(oprater === "/"){
    alert("Result  is " + devide)
}
else if(oprater === "%"){
    alert("Result  is " + reminder)
}
else(
    alert("Please enter a oprater")
)



// Q eight

var Time=Number(prompt("Enter current time"))

var hours = 2400

if(Time >= 0000 && Time<1200){
    alert("GOOD MORNING")
}
else if(Time >= 1200 && Time<1700){
    alert("GOOD AFTERNOON")
}
else if (Time >= 1700 && Time<2100){
    alert("GOOD EVENING")
}
else if (Time >=2100 && Time <=2359){
    alert("GOOD NIGHT")
}
else(
    alert("Type Correct time")
)

// Q nine




// Q ten

var pass=Number(prompt("Enter your password"))
var c_pass=Number(prompt("Confirm your password"))

if(pass == c_pass){
    alert("Correct Password")
}
else if(pass !== c_pass){
    alert("incorrect password")
}
else {
    alert("Please enter your password")
}



// Q eleven 

var myName= prompt("Enter your name")

if(myName == "Fahad"){
    alert("Hello Fahad")
}
else(
    alert("You are not fahad")
)


// Q twell


var hour= Number(prompt("Enter current time"))

if (hour < 18) {
 alert("Good day")
}
else{
alert ("Good evening")
}




// Q tharteen
   
var num1=Number(prompt("enter first number"))
var num2=Number(prompt("enter second number"))

if(num1 > num2 ){
    alert(num1 + " is large number from "+ num2)
}
else if (num2 > num1){
    alert(num2+ " is large number from "+ num1)
}
else{
    alert("Both numbers are equal")
}




// Q fourteen


var num=Number(prompt("Type any number"))

if(num >=15 ){
    alert("This number is positive")
}
else if(num>=1 && num <= 14){
    alert("This number is nagative")
}
else if (num === 0 && num<=0){
    alert("This number is zero")
}
else(
    alert("first you enter a numbr")
)


// Q fifteen

var currnt_hour=Number(prompt("Enter the current hour"))

if (currnt_hour >=6 && currnt_hour <=9){
    alert("Breakfast is  served")
}
else if(currnt_hour >= 11 && currnt_hour<=13){
    alert("Time for lunch")
}
else if (currnt_hour >=17 && currnt_hour<=20){
    alert("It's dinner time")
}
else(
    alert("Sorry, you'll  have to wait, or go get a snack.")
)




// Q sixteen


var myName = "Ahmad Ali" // This variable is string
var num = 50 // This variable is number
var inLife = true // This variable is boolean 
var cars; // This variable is undefined

   
// Q seventeen

var letters=prompt("ENTER A VOWEL LETTERS")

if(letters == 'e' || letters == 'o' ||letters == 'a' ||letters == 'i' ||letters == 'u'){
    alert("true")
}
else(
    alert("false") 
)





// // Q eighteen

10 !==8



// // Q Nineteen

var month = Number(prompt("Enter a month number"))



if (month == 1) {
    alert("January")
} 

else if (month == 2){
    alert("February")
}

else if (month == 3){
    alert("March")
}

else if (month == 4){
    alert("April")
}

else if (month == 5){
    alert("May")
}

else if (month == 6){
    alert("June")
}

else if (month == 7){
    alert("July")
}

else if (month == 8){
    alert("August")
}

else if (month == 9){
    alert("September")
}

else if (month == 10){
    alert("October")
}

else if (month == 11){
    alert("November")
}

else if (month == 12){
    alert("December")
}

else {
    alert("invalid month")
}




// Q Twenty

var age = Number(prompt("ENTER  YOUR AGE "))

var age2= 18

if(age<=18){
    alert("Too Young")
}
else (
    alert("Old enough")
)
