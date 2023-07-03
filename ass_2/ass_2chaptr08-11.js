
// Q one


var myName =  prompt(" Whats Your Name? ")

alert ("HI " + myName+ " HOW ARE YOU?")




// Q two


var anyNumbr= Number(prompt("Enter any number for multiple table."))

for (var i=1; i<=10; i++){
    document.write(anyNumbr+" x "+ i + " = " +(anyNumbr*i)+"<br>")
}






// Q three


var city = prompt("Please enter your city")

if(city = "KARACHI"){
    alert("Welcome to city of lights")
} 




// Q four

var gender = prompt ("Enter your Gender ")

if(gender === "male"){
    alert("Good Morning Sir")
} 
else{
    alert("Good Morning Ma'am")
}





// Q five 

var color = prompt("Type the Color React the color massage")

if (color === "red") {
    alert("vehicles must stop")
}

else if (color === "green") {
    alert("vehicles can move now")
}
else if (color === "yellow"){
    alert("vehicles should get ready to move")
}





// // Q six



var max_age= 50
var current_age=23
var max_age=Number(prompt("Enter your Max Age"))
var current_age=Number(prompt("Enter your current age"))

if(current_age<=max_age){
    alert("Your Are Wellcome")
}
else(
    alert("not aloow")
)


// // Q seven

var remaing_fuel= Number(prompt("How much reamaing fuel in your car"))

if(remaing_fuel<=0.25)
{
    alert("Please refill the fuel in your car")
}
else(
    alert("you are go to long drive with me")
)



// // Q Eight

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// this syentex is Corret

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// this is false

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// this is false
if (c === 13){
alert("condition 2 is true");
}
// this syentex is Corret

if (++c < 14){
alert("condition 3 is true");
}
// this is false
if(c === 14){
alert("condition 4 is true");
}

// this syentex is Corret


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// this syentex is Corret
if (true){
alert("True");
}

// this syentex is Corret
if (false){
alert("False");
}
// this is false
if("car" < "cat"){
alert("car is smaller than cat");
}
// this syentex is Corret




// Q Nine



var chemistry = Number(prompt("Enter Your Chemistry marks"))

var bio = Number(prompt("Enter Your bio marks"))

var physics = Number(prompt("Enter Your physics marks"))

var obtaind_marks = chemistry + bio + physics
var total_marks = 300
var percentage = (obtaind_marks / total_marks) * 100

if (percentage >= 80) {
    document.write(
        "Total marks : " + total_marks + "<br>" +
        "Marks obtaind : " + obtaind_marks + "<br>" +
        "Persentage : " + percentage + "%" + "<br>" +
        "Grade : " + " A-One " + "<br>" +
        "Remarks : " + " Excellent " + "<br>"
    )
}
else if (percentage >= 70) {
    document.write(
        "Total marks : " + total_marks + "<br>" +
        "Marks obtaind : " + obtaind_marks + "<br>" +
        "Persentage " + percentage + "%" + "<br>" +
        "Grade : " + " A " + "<br>" +
        "Remarks : " + " Good " + "<br>"
    )
}
else if (percentage >= 60) {
    document.write(
        "Total marks : " + total_marks + "<br>" +
        "Marks obtaind " + obtaind_marks + "<br>" +
        "Persentage " + percentage + "%" + "<br>" +
        "Grade : " + " B " + "<br>" +
        "Remarks : " + " You need to improve " + "<br>"
    )
}
else{
    document.write(
        "Total marks : " + total_marks + "<br>" +
        "Marks obtaind : " + obtaind_marks + "<br>" +
        "Persentage " + percentage + "%" + "<br>" +
        "Grade : " + " Fail " + "<br>" +
        "Remarks : " + " Sorry " + "<br>"
    )
}


// Q ten


var item1 = prompt("What do you need in item 1?")
var item_1_quantity = Number(prompt("How many items should there be in item 1?"))
var item1_price = Number(prompt("Enter item one price."))
var item2 = prompt("What do you need in item 2?")
var item_2_quantity = Number(prompt("How many items should there be in item 2?"))
var item2_price = Number(prompt("Enter item two Price."))
var shiping_charg = Number(prompt("What do you need shiping charges?"))

var total = (item_1_quantity * item1_price) + (item_2_quantity * item2_price) + shiping_charg
var discount = 0.1 * total

if (total >= 2000) {
    document.write(
        "Shoping cart " + "<br><br>" +
        "Price of  " + item1 + " is " + item1_price + "<br>" +
        "Quantity of item one is " + item_1_quantity + "<br>" +
        "Price of " + item2 + " is " + item2_price + "<br>" +
        "Quantity of item two is " + item_2_quantity + "<br><br>" +

        "Shipping charges " + shiping_charg + "<br>" +
        "Total cost of your order is " + total + " PKR" + "<br>" +
        "Discounted Price is " + discount + " PKR" 
        
    )
}
else if (total < 2000) {
    document.write(
        "Shoping cart " + "<br><br>" +
        "Price of " + item1 + " is " + item1_price + "<br>" +
        "Quantity of item one is " + item_1_quantity + "<br>" +
        "Price of " + item2 + " is " + item2_price + "<br>" +
        "Quantity of item two is " + item_2_quantity + "<br><br>" +

        "Shipping charges " + shiping_charg + "<br>" +
        "Total cost of your order is " + total + " PKR" + "<br>" +
        "Discount is 2000+ shopping"

    )
}


// Q Eleven 

var secret_number = Number(prompt("Enter any Secret Number."))

if(secret_number<=10){
    alert("BINGO! Correct answer.")
}
else{
    alert("Close enough to the correct answer.")
}




// Q Twell

var num=Number(prompt("Enter A number."))
 

var newNumbr= num%3
var formula = "&deg;F"

if(num % 3==0){
    document.write(num+" divisible by 3 , " + newNumbr+"&deg;C")
}
else{
    alert("This number is not divisible ")
}


// // Q tharteen 

var teamA=prompt("Enter A Team Name")
var total_score=Number(prompt("Enter Total score team A"))

var teamB=prompt("Enter B team Name")
var total_score2=Number(prompt("Enter Total score team B"))

if (total_score > total_score2){
    alert(teamA+ " Have Won The Game")
}
else if (total_score === total_score2){
    alert(teamA +" && "+ teamB+" This Time Game Is Tie")
}
else(
    alert(teamB+ " Have Won The Game")
)


// Q fourteen

var city="Indonasia"
alert(city + " Is A String")

var secNum= 56
alert(secNum + " Is A Number")

var isLive =true
alert(isLive + " Is A Boolean")


// // Q fifteen


var num=Number(prompt("Enter A number"))

var formula= (num*9/5) + 32

var formula2 =  (num-32) * 5/9

if(num / 2){
   document.write(formula+"&deg;C" +"  is A current weater")
}
else(
    document.write(formula2 +"&deg;C"+ " is a current weater")
)



// Q Sixteen 

var tempratce= prompt("Enter A numbr for show the today karachi weater.")

if(tempratce>=40){
    alert("It is too hot outside.")
}
else if(tempratce>=30){
    alert("The Weather today is Normal.")
}
else if(tempratce>=20){
    alert("“Today's Weather is cool.”")
}
else if(tempratce>=10){
    alert("OMG! Today's weather is so Cool.")
}
else(
    alert("try again")
)



// Q seveteen

var num=Number(prompt("Enter a any number"))
var oprater=prompt("Enter oprater for second numbr")
var num2=Number(prompt("Enter a second number"))

var plus= num + num2
var minus= num - num2
var multiply= num * num2
var devide= num / num2
var reminder= num % num2


if(oprater === "+"){
    alert(num + " + " + num2 +  " is " + plus)
}
else if(oprater === "-"){
    alert(num + " - " + num2 + " is " + minus)
}
else if(oprater === "*"){
    alert(num + " * " + num2 + " is " + multiply)
}
else if(oprater === "/"){
    alert(num + " / " + num2 + " is " + devide)
}
else if(oprater === "%"){
    alert(num + " % " + num2 + " is " + reminder)
}
else(
    alert("Please enter a oprater")
)



// Q eighteen

var day_name =prompt("Enter a days name & confirm this day is weakend or not")

if (day_name=== ("Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday")) {
    alert("It's a week day.")
}
else if(day_name === "saturday"){
    alert("It's weekend.")
}
else if(day_name ==="sunday"){
    alert("Yah! it's  holiday")
}
else(
    alert("enter corret day")
)

|| "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday"



// Q nineteen


var score= Number(prompt("Enter your score"))

if(score>=50){
    alert("You are passed")
}
else(
    alert("Try again")
)




// Q twenty

var num1=Number(prompt("Enter Number one"))
var num2=Number(prompt("Enter the second number"))

var equl = num1 > num2

if (num1 > num2){
    alert("The grather number of "+num1+" and "+num2+" is " + equl)
}
else(
    alert("Enter first number is grather then from second numbr")
)




// Q twentyone

var word= prompt("Enter a languages to show massege")

if(word === "es"){
    alert("Hola Mundo")
}
else if (word === "de"){
    alert("Hallo Welt")
}
else if(word=== "en"){
    alert("Hello, World")
}
else(
    alert("type the correct language code")
)


// Q twentytwo

var num=Number(prompt("enter number for chaking a positive or nagative"))

if(num >= 1){
    alert("This number is positive")
}
else(
    alert("this number is nagative")
)


// //Q twentythree

var num=Number(prompt("Plase enter a Number "))
var names=(prompt(" Plase enter a Name"))

alert(num  +  names + "s")









