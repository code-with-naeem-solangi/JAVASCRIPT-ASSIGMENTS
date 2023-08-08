// ** Chapter 39 to 48 Start ** //


// ** SWITCH	STATEMENTS START ** //


// // Question 1

// Write a switch statement with the following condition:If the variable age is greater than 18, output "Old enough", otherwise output "Too young".

user_age = Number(prompt("Enter your age"))


switch (true) {
    case user_age > 18:
        {
            document.write("Old enough")
        }

        break;

    default: {
        document.write("Too young")
    }
}


// // Question 2

// Write a program to check whether the given input number is divisible by 3 or not by using Switch Case statements.Show a message“ Number is not divisible by 3” or“ Number is divisible by 3” .


number = Number(prompt("enter number divisible for 3"))

switch (number % 3) {
    case 0: {
        document.write("number is divisible by 3")

    }
        break;
    default: {
        document.write("number is  not divisible by 3")


    }
}


// // Question 3

// Write a program to create a calculator for +, -, *, /, % using switch case statements. (number1, number2 and operator will be input)

num1 = Number(prompt("Enter first number"))
oprater = prompt("Enter oprater for second number")

num2 = Number(prompt("Enter second number"))

switch (oprater) {
    case "+": {
        document.write("first number is " + num1 + " Oprater is " + oprater + " Second number is " + num2 + " Final number is " + num1 + num2)
    }
        break;


    case "-": {
        document.write("first number is " + num1 + " Oprater is " + oprater + " Second number is " + num2 + " Final number is " + num1 - num2)
    }
        break;

    case "*": {
        document.write("first number is " + num1 + " Oprater is " + oprater + " Second number is " + num2 + " Final number is " + num1 * num2)
    }
        break;

    case "/": {
        document.write("first number is " + num1 + " Oprater is " + oprater + " Second number is " + num2 + " Final number is " + num1 / num2)
    }
        break;
    default: {
        document.write("try again")
    }
}


// // Question 4

// The getDay() method returns the weekday as a number between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 …).Use the weekday number to calculate weekday name.



today = new Date();
day = today.getDay();

switch (day) {
    case 0: {
        document.write("Sunday")
    }

        break;

    case 1: {
        document.write("Monday")
    }

        break;
    case 2: {
        document.write("Tuesday")
    }

        break;

    case 3: {
        document.write("Wednesday")
    }

        break;

    case 4: {
        document.write("Thursday")
    }

        break;

    case 5: {
        document.write("Friday")
    }

        break;

    case 6: {
        document.write("Saturday")
    }

        break;

    default: {
        document.write("try again")
    }

}



// // Question 5

// The getDay() method returns the weekday as a number between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...). If today is neither Saturday (6) nor Sunday (0), write a default  message:


today = new Date();
day = today.getDay();

switch (day) {
    case 0: {
        document.write("Today is Sunday")
    }

        break;

    case 6: {
        document.write("Today is Saturday")
    }



    default: {
        document.write("today is not Saturday or sunday")
    }

}


// // Question 6

/*
// Given the following script

function checkCar() {

 var text;
 var favCar = prompt("What is your favorite car?");
 switch(favCar) {
 //Add code here
 }
 document.write( text);
}
checkCar();

Finish the switch statement. Add the
following cases: BMW, Ford and Peugeo.
Set the value of the variable text to:
"German car" for BMW. 
"American car" for Ford. 
"French car" for Peugeot.
Also add a default case where the text value is "Unknown car name".

*/




function checkCar() {
    var text;
    var favCar = prompt("What is your favorite car?");

    switch (favCar) {
        case 'BMW':
            text = "German Car"
            break;
        case 'Ford':
            text = "American Car"
            break;
        case 'peugeot':
            text = "French Car"
            break;
        default:
            text = "Unknown Car"
            document.write(text)

    }
}
checkCar();



// //Question 7 

/*
Fix the following switch statement:

function checkFruit() {

 var text;
 var fruits = prompt("Enter a fruit name");
 switch(fruits) {
 case "Banana"
 text = "Banana is good!"; 
 case "Orange"
 text = "I am not a fan of orange."; 
 case "Apple"
 text = "How you like them apples?";

default

 text = "I have never heard of that fruit.";
 }
 document.write( text);
}
checkFruit();

*/



function checkFruit() {

    var text;
    var fruits = prompt("Enter a fruit name");
    switch (fruits) {
        case "Banana":
            text = "Banana is good!";
            break;
        case "Orange":
            text = "I am not a fan of orange.";
            break;
        case "Apple":
            text = "How you like them apples?";
            break;

        default:

            text = "I have never heard of that fruit.";
    }
    document.write(text);
}
checkFruit();




// // Question 8

// Write a function that displays the marks range against a particular grade. For example, if grade is “B”, then print Marks [ >= 60 and <70 ]


function gradeChk() {

    var mark;

    user_grade = prompt("Enter your result Grade")

    switch (user_grade) {
        case 'A+':
            mark = "Marks is >= 85"
            break;
        case 'A':
            mark = "Marks is >= 70 and <85"
            break;
        case 'B':
            mark = "Marks is >= 60 and <70"
            break;
        case 'C':
            mark = "Marks is >= 50 and <60"
            break;
        case 'D':
            mark = "Marks is >= 40 and <50"
            break;
        default:
            mark = "You are faild"
    }
    document.write(mark)


}

gradeChk()





// // Question 9

// Use a switch statement to rewrite the following JavaScript code. Prompt the user for the number of a month rather than setting it to 8:



month = Number(prompt("Enter A number for month"))
var text;
switch (month) {
    case 0:
        text = "January "
        break;
    case 1:
        text = "February "
        break;
    case 2:
        text = "March "
        break;
    case 3:
        text = "April "
        break;
    case 4:
        text = "May "
        break;
    case 5:
        text = "June "
        break;
    case 6:
        text = "July "
        break;
    case 7:
        text = "August "
        break;
    case 8:
        text = "September "
        break;
    default:
        text = "invalid month "
}
document.write(text)




// // Question 10

// Use a conditional (ternary) operator for this exercise: If the variable age is a value below 18, the value of the variable  voteable should be "Too young", otherwise the value of voteable should be "Old enough"


user_age = Number(prompt("Enter your age "))

age = user_age < 18 ? "Too Young " : "Old enough "

document.write(age)


// ** SWITCH	STATEMENTS END ** //



// ** WHILE	&	DO-WHILE	LOOPS START ** //


// // Question 11

// Write a program to display the message “Hello World” 5 times in your browser.

var i = 0;

while (i < 5) {
    i++
    document.write("Hello World" + "<br>")
}


// // Question 12

// Write a program to print numeric counting from 1 to 10.

var i = 0;

while (i < 10) {
    i++
    document.write(i + "<br>")
}


// // Question 13

//  Write a program to print multiplication table of any number using. Table number & length should be taken as an input from user


var tabl = Number(prompt("Enter number for multiplication table"))
var leng = Number(prompt("Enter length of multiplication table"))

document.write("Multiple table of " + tabl + "<br>" + "Length " + leng + "<br><br>")

var i = 0
while (i < leng) {

    i++
    document.write(tabl + " x " + i + " = " + i * tabl + "<br>")
}


// // Question 14

// You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] Write each element on new line.


devices = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]

i = 0;

while (i < 4) {
    i++
    document.write(devices[i] + "<br>")
}


// // Question 15

// Write a program to print items of the following array : fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (i = 0; i <= 4; i++) {
    document.write(fruits[i] + "<br>")
}

document.write("<br>" + "Element at index 0 is " + fruits[0] + "<br>")
document.write("Element at index 1 is " + fruits[1] + "<br>")
document.write("Element at index 2 is " + fruits[2] + "<br>")
document.write("Element at index 3 is " + fruits[3] + "<br>")
document.write("Element at index 4 is " + fruits[4] + "<br>")



// // Question 16

// Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.

var items = Number(prompt('Enter number of items'));
var newarry = [];
var i = 0;
while (i < items) {
    i++
    var item_name = prompt("Enter value for index " + (i) + ' : ');
    newarry.push(item_name + '<br>');

}
document.write(newarry);


// // Question 17

// Generate the following series in your browser. See example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write('<h3>Counting</h3>')

var i = 0;

while (i < 15) {
    i++
    document.write(i + ", ");
}


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write("<h3>Reverse counting</h3>")

var i = 11;
while (i > 1) {
    i--
    document.write(i + " , ")
}


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<h3>Even</h3>")

var i = 0;

while (i < 20) {
    i = i + 2
    document.write(i + " , ")

}


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<h3>odd</h3>")

var i = 1;

while (i < 20) {
    i = i + 2
    document.write(i + " , ")

}


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("<h3>Even</h3>")

var i = 0;

while (i < 20) {
    i = i + 2
    document.write(i + "k" + " , ")

}


// // Question 18

// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var check = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

for (i = 0; i < arr.length; i++) {
    if (check === arr[i]) {
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        break;
    }
    else {
        document.write("We are sorry." + check + " is not avaible in our bakery");
        break;
    }
}


// // Question 19

// You have given the following arrays: var students = ["Ali", "Sami", "Taha", "Inam"]; var scores = [58, 73, 89, 90]; Write a program to generate the following HTML table in your browser using JS.


var students = ['Ali', 'Sami', 'Taha', 'inam'];
var scores = [58, 73, 89, 90];

document.write("<table>")

document.write('<tr>')

document.write('<th>' + "Studants" + "</th>")
document.write('<th>' + "Scores" + "</th>")
document.write('</tr>')

for (var a = 0; a < students.length; a++) {

    document.write('<tr>')

    document.write('<td>' + students[a] + "</td>")

    document.write('<td>' + scores[a] + "</td>")
    document.write('</tr>')
}
document.write("</table>")


// // Question 20

// Write a program that prints number from start of the array to desired stop value. Given array: var scores = [12, 45, 3, 22, 34, 50]; (Hint: take stop value from user) E.g. if user gives 3 as input value print 12, 45, 3 if user gives 34 as input value print 12, 45, 3, 22, 34


var scores = [12, 45, 3, 22, 34, 50];


var stopValue = Number(prompt("Enter the stop value:"));


for (var i = 0; i < scores.length; i++) {

    if (scores[i] > stopValue) {
        break;
    }

    document.write(scores[i]);
}



// // Question 21

// You have an array A = [ [1,2,3] , [4,5,6] , [7,8,9] ] Write each element on new line with the help of nested loops.

var multi_arry = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


for (var i = 0; i < multi_arry.length; i++) {

    for (var b = 0; b < multi_arry[i].length; b++) {

        document.write(multi_arry[i][b]);
    }
    document.write("<br>")
}



// // Question 22

// Write a program to repeatedly print the value of the variable  num which is input by user. Value should be decreasing by 0.5  each time, as long as x Value remains positive.

var num = Number(prompt("Enter the initial value of num:"));


while (num > 0) {
    document.write(num + "<br>");
    num -= 0.5;
}


// // Question 23

//  The even/odd reporter Write a loop that will iterate from 0 to 20. For each iteration, it  will check if the current number is even or odd, and report that  to the screen (e.g. "2 is even").

for (var i = 0; i <= 20; i++) {

    if (i % 2 === 0) {
        document.write(i + " is even");
    } else {
        document.write(i + " is odd");
    }
    document.write("<br>")
}


// // Question 24

// Write a program to calculate the product of the odd integers from 1 to 7.

var product = 1;


for (var i = 1; i <= 7; i++) {

    if (i % 2 !== 0) {

        product *= i;
    }
}
document.write("Product of odd integers from 1 to 7: " + product);


// Question 20

// Write a program to create the following patterns in your browser. Take number of lines as an input


// a
// *****
// *****
// *****
// *****

for (var i = 1; i <= 5; i++) {
    for (var b = 1; b <= 5; b++) {
        document.write(b)
    }
    document.write("<br>")
}



// b
// *
// **
// ***
// ****
// *****

for (var i = 1; i <= 5; i++) {
    for (var b = 1; b <= i; b++) {
        document.write(b)
    }
    document.write("<br>")
}


// c
// *****
// ****
// ***
// **
// *

for (var i = 1; i <= 5; i++) {
    for (var b = i; b <= 5; b++) {
        document.write(b)
    }
    document.write("<br>")
}


// ** WHILE	&	DO-WHILE	LOOPS END ** //

// ** EVENTS START ** //



// ** Note : Question 1,2 and 3 in Html ** // 




// Question 3

// Display 10 student records in table and each row should contain a delete button.If you click on a button to delete a record, entire row should be deleted.

function delRecord(e) {
    e.parentNode.parentNode.remove()
}








// ** EVENTS END ** //

// ** Chapter 39 to 48 End ** //