// * Chapter 26 to 34 Start * //




// // Question 1 

// Write a program that takes a positive integer from user & display the following in your browser.



//  a. number

var user_numbr = Number(prompt("Enter Any numbers for Positive integer values , number value, Round value, Floor Value and Ceil Value"));

document.write("Number " + user_numbr + "<br>")

// b. round off value of the number

document.write("Round of Value " + Math.round(user_numbr) + "<br>")

// c. floor value of the number


document.write("Floor Value " + Math.floor(user_numbr) + "<br>")


// d. ceil value of the number

document.write("Ceil Value " + Math.ceil(user_numbr));







// // Question 2

// Write a program that takes a Negative integer from user & display the following in your browser.




// a. number

var user_numbr = Number(prompt("Enter Any numbers for Negative integer values , number value, Round value, Floor Value and Ceil Value"));

document.write("Number " + -user_numbr + "<br>")

// b. round off value of the number

document.write("Round of Value " + Math.round(-user_numbr) + "<br>")



// c. floor value of the number

document.write("Floor Value " + Math.floor(-user_numbr) + "<br>")


// d. ceil value of the number

document.write("Ceil Value " + Math.ceil(-user_numbr));






// // Question 3

// Write a program that takes a Positive Floating point from user & display the following in your browser.




// a. number

var user_numbr = Number(prompt("Enter Any numbers for Negative integer values , number value, Round value, Floor Value and Ceil Value"));

document.write("Number " + user_numbr + "<br>")

// b. round off value of the number

document.write("Round of Value " + Math.round(user_numbr) + "<br>")



// c. floor value of the number

document.write("Floor Value " + Math.floor(user_numbr) + "<br>")


// d. ceil value of the number

document.write("Ceil Value " + Math.ceil(user_numbr));







// // Question 4

// Write a program that takes a Negative Floating point from user & display the following in your browser.




// a. number

var user_numbr = Number(prompt("Enter Any numbers for Negative integer values , number value, Round value, Floor Value and Ceil Value"));

document.write("Number " + -user_numbr + "<br>")

// b. round off value of the number

document.write("Round of Value " + Math.round(-user_numbr) + "<br>")



// c. floor value of the number

document.write("Floor Value " + Math.floor(-user_numbr) + "<br>")


// d. ceil value of the number

document.write("Ceil Value " + Math.ceil(-user_numbr));







// // Question 5

//Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5


var number = Number(prompt('Enter any number for conver absolute value'))

var new_number = Math.abs(number);

document.write("The absolute value "+number +" is " +new_number)


// // Question 6


// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.


var dice = Math.random () * 6

document.write ("Random Dice Value " + Math.ceil(dice))



// // Question 7

// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your  browser.


var number = Math.random () * 2

var coin = Math.floor(dice)


if (coin > 0) {
  document.write( coin + "<br>"+'Random coin value : head')
  
} else {
  document.write( coin + "<br>"+'Random coin value : tail')
}


// // Question 8

// Write a program that shows a random number between 1 and 100 in your browser.


var number = Math.random()*100

var random = Math.floor(number)


document.write("Random Number Between 1 And 100: " + random)


// // Question 9

// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:

//a. 50
//b. 50kgs
//c. 50.2kgs
//d. 50.2kilograms


var kilograms= Number(prompt("Enter your weight"))

document.write("The weight of user is " + kilograms + " Kilograms")


// // Question 10

// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var secrt_numbr = [1,2,3,4,5,6,7,8,9,10]

var user_numbr = Number(prompt("Please Enter number between 1 to 10"))

if (user_numbr <= secrt_numbr[user_numbr]) {
  document.write("Congratulations")
  
} else {
  document.write("try again")
}


// // Question 11

// Write a program that displays current date and time in your browser.

var time=new Date();

document.write(time)


// // Question 12

// Write a program that alerts the current month in words. For example December.

var date = new Date ();

var current_month = date.getMonth();

var months = [' January ',' February ' , 'March' , ' April', ' May ' , ' June ', ' July ', ' August' , ' September',' October ', ' November', ' December']

document.write("Current Month is " + months [currnt_month])


// // Question 13

// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var date= new Date ();
var day = date.getDay();

var days = ['sun' , 'Mon ' , 'the','wed','thu','fri','sat']

document.write("Today is " + days[day])


// // Question 14

// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var name1 = prompt("enter a day")
if (name1=="sunday" || name1=="saturday"){
  document.write("its fun day")
}else(
  document.write("its not fun day")
 )


// // Question 15

// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.


var date = Number(prompt("Enter current date of the month"))

if (date < 16) {
  document.write("First Fifteen Days Of The Month")
} else {
  document.write("Last Fifteen Days Of The Month")
}


// // Question 16

// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object


var laterDate= new Date();

document.write("Current date " +laterDate +"<br>")

var mili = laterDate.getTime();

document.write("Elipasad milliseconds since January 1, 1970 "+mili + "<br>")



// // Question 17

// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.




var time = Number(prompt("Enter current Time for AM and PM time /n Time formet is 2400 house"))


if (time < 12) {
  document.write("It's AM")
  
} else {
  document.write("It's PM")
}


// // Question 18

// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDat


var laterDate= new Date("31 Dec, 2020")

document.write("Later Date : "  +laterDate)



// // Question 19

// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015


var startingRamadanDate = new Date('2015-06-18');

var currentDate = new Date();


var timeDifference = currentDate - startingRamadanDate;
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


document.write("Number of days passed since 1st Ramadan: " + daysPassed + " days");




// //  Question 20

// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.



var today = new Date()
var year= new Date ( 2015)

var new_date = today - year 

var answer = new_date/1000

document.write("On Reference Date " + today + "<br>" + answer +" Seconds had passed since beginning of 2015")


// // Question 21

// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var today = new Date();
var hourAgo = today.getHours();
hourAgo = hourAgo-1
document.write("current date: " + today + "<br>");
today.setHours(hourAgo);
document.write("1 hour ago, it was " + today);



// // Question 22

// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?


var today = new Date();
document.write("current date: " + today + "<br>");
var backYear = today.getFullYear();
backYear = backYear - 100 
var fullYear = today.setFullYear(backYear)
document.write("100 Years back, it was " + today);



// // Question 23

// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var date_of_year = Number(prompt("Enter Your Date Of Year"))

var date = new Date();

var current_year= date.getFullYear();

var age = currnt_month - date_of_year;

document.write("Your age is " + age + "<br>")
document.write("Your Birth Year is " + date_of_year)


// //  Question 24

/*
Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal 

places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
*/



document.write("<h1> K-Electric Bill </h1>" + "<br>")

var customr_name = prompt("Enter customer full name")
document.write("Customer Name : "+ customr_name + "<br>")


var day = new Date ();
var month= day.getMonth();
month_list = [' January ',' February ' , 'March' , ' April', ' May ' , ' June ', ' July ', ' August' , ' September',' October ', ' November', ' December']
document.write("Month : "+ month_list[month] + "<br>")


var units = Number (prompt("Number of units"))
document.write("Number of units :"+ units + "<br>")

var units_rate = Number(prompt("Enter per unit rate "))
document.write("Charges per unit : "+units_rate + "<br><br>")

var before_late_pay_tex = units*units_rate;

document.write("Net Amount Payable (within Due Date) : " + before_late_pay_tex + "<br>")

var late_pay_tex = before_late_pay_tex / 8

document.write("Late peyment surcharges  : " + late_pay_tex + "<br>")

var after_late_pay_tex = before_late_pay_tex + late_pay_tex;

document.write("Net Amount Payable (after Due Date) : " + after_late_pay_tex + "<br>")



// * Chapter 26 to 34 End * //