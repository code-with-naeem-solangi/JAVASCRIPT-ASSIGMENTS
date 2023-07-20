// ** Chapter 15 to 17 Start ** //



//Note: Arry index will be start From 0 not start from 1 for example
// my arry ['hello','world']; hello is 0 and world is 1 
// all confusing is Gone away




// Question 1

//Declare an empty array using JS literal notation to store  student names in future.


var studentNames = [];



// Question 2

// Declare an empty array using JS object notation to store  student names in future.

var students = {

    // studant names
    // studant names
    // studant names
    // studant names
    // studant names


};




// Question 3

//Declare and initialize a strings array.

var studentNames = ['Kashif', 'Zubair', 'imran', 'Habiba', 'salma', 'Sumaira'];


console.log(studentNames)// output is all studant names

console.log(studentNames[3]);// output is habiba 

// Question 4

// Declare and initialize a numbers array.

var numbers = [6, 7, 8, 9, 10, 35, 555,];

// Question 5

// Declare and initialize a boolean array.

var myBoolens = [true, false, true, false, false, true];

// Question 6

// Declare and initialize a mixed array.

var mixedArrys = ['strings', 67, false,];


// Question 7

// Declare and Initialize an array and store available mobile networks in Pakistan

var networks = ['Zong', 'Jazz', 'Telenor', 'Ufone', 'Scom'];

// if you type in console.log(network) output is all networks 
// if you type in console.log (network[1]) output is only jazz


// Question 8

// Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser.

var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD',];
document.write("1)" + qualifications[0] + " <br>")
document.write("2)" + qualifications[1] + " <br>")
document.write("3)" + qualifications[2] + " <br>")
document.write("4)" + qualifications[3] + " <br>")
document.write("5)" + qualifications[4] + " <br>")
document.write("6)" + qualifications[5] + " <br>")
document.write("7)" + qualifications[6] + " <br>")
document.write("8)" + qualifications[7] + " <br>")

// Question 9

// Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. 
// Display the elements & length of array in your browser. (Use array’s length method)

var movies = [];


movies.push("1) Avengers : Age of Ultron " + "<br>")


movies.push("2) Spectre " + "<br>")


movies.push("3) Jurassic world " + "<br>")

movies.push("4) inside out " + "<br>")

document.write(" <h2>Top Movies of 2015 </h2> " + "<br>" + movies.join(" ") + "<br>")

document.write("Length of the arry is " + movies.length)




// Question 10


// Declare and Initialize an array with your favorite cars. Show
/*a. First index of the array
b. Car at first index of the array 
c. Last index of the array*/

var cars = ["carolla", "toyota", "civic"];

document.write("First index of the arry is " + cars[0] + "<br>")

document.write("First car in the arry is " + cars[0] + "<br>")

document.write("last index of the arry is " + cars[cars.length - 1] + "<br>")

document.write("last car in the arry is " + cars[cars.length - 1] + "<br>")



// Question 11

// Write a program to store 3 student names in an array. Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores percentages of students

var studants = ['Habiba', 'Salma', 'Huraira'];
var marks = [490, 300, 400];
var totalMarks = 500;

document.write('Score of ' + studants[0] + ' is ' + marks[0] + ' percentage ' + ((marks[0] / totalMarks) * 100) + "<br>")

document.write('Score of ' + studants[1] + ' is ' + marks[1] + ' percentage ' + ((marks[1] / totalMarks) * 100) + "<br>")
document.write('Score of ' + studants[2] + ' is ' + marks[2] + ' percentage ' + ((marks[2] / totalMarks) * 100) + "<br>")


// Question 12

// Initialize an array with color names. Display the array elements in your browser.

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning 
// of the array. Display the updated array in your browser.

var colors = ['red', 'yellow', 'green'];

var question = prompt('what color you wants to aad to the beginning?')
colors.unshift(question);

console.log(colors);


// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
// Display the updated array in your browser.

var colors = ['red', 'yellow', 'green'];

var question = prompt('what color you wants to aad to the End?')

colors.push(question);

console.log(colors);

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

var colors = ['red', 'yellow', 'green'];

colors.splice(1, 0, 'Pink ', ' White ');

console.log(colors);

// d. Delete the first color in the array. Display the updated array in your browser.

var colors = ['red', 'yellow', 'green'];

colors.shift();

console.log(colors);


// e. Delete the las color in the array. Display the updated array in your browser.

var colors = ['red', 'yellow', 'green'];

colors.pop();

console.log(colors);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. 
// . Display the updated array in your browser.

var colors = ['red', 'yellow', 'green'];

var which_aad = Number(prompt('which index aad the color?'))
var color_name = prompt('Enter to the color name.')

colors.splice(which_aad, 0, color_name)

console.log(colors);


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-definedposition/index. . Display the updated array in your browser

var colors = ['red', 'yellow', 'green', 'Light green', 'light red', 'light yellow', 'black'];

var which_delete = Number(prompt('which index delete the color?'))

var items = Number(prompt('How many delete the colors '))

colors.splice(which_delete, items);

console.log(colors);

// Question 13

// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var numbers = [35, 65, 12, 88];
document.write("Source of students " + numbers + "<br><br>")

numbers.sort();
document.write("Ordered score of students" + numbers)


// Question 14

// Write a program to sort the below mentioned array:var fruits = [“strawberry”, “apple”, “orange”, “banana”];


var fruits = ['strawberry', 'apple', 'orange', 'banana'];
document.writeln('Fruits list: ' + "<br><br>" + fruits + "<br><br>");

fruits.sort();
document.write('Order fruits list:' + "<br>" + fruits)


// Question 15

// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cities = ['Karachi', 'Lahore', 'islamabad', 'Quetta', 'Peshawer'];

document.write('Cities list is' + "<br>" + cities + '<br><br>');

var selectedCities = cities.slice(2, 4);
document.write('Selected cities is ' + "<br>" + selectedCities);


// Question 16

// Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)

var arry = ["This ”, “ is ”, “ my ”, “cat"];
document.write(arry + "<br><br>")

var arry = ['This ', 'is ', 'my ', 'cat'];
var join = arry.join('');
document.write('join arry is ' + "<br>" + join);


// Question  17

// Create a new array. Store values one by one in such a way that you can access the values in the order in which 
// they were stored. (FIFO-First In First Out)

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices:" + "<br/>" + devices + "<br>" + "<br>");

var out = devices.shift();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.shift();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.shift();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.shift();
document.write("Out:" + "<br>" + out + "<br>");


// Question 18

//  Create a new array. Store values one by one in such a way that you can access the values in reverse order. 
// (Last In-First Out)

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices:" + "<br/>" + devices + "<br>" + "<br>");

var out = devices.pop();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.pop();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.pop();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.pop();
document.write("Out:" + "<br>" + out + "<br>");

// Question 19

// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:

var mobile_phones = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];


document.write("<select>")

document.write("<option>" + mobile_phones[0] + "</option>")
document.write("<option>" + mobile_phones[1] + "</option>")
document.write("<option>" + mobile_phones[2] + "</option>")
document.write("<option>" + mobile_phones[3] + "</option>")
document.write("<option>" + mobile_phones[4] + "</option>")
document.write("<option>" + mobile_phones[5] + "</option>")

document.write("</select>")


// Question 20

// Declare and initialize an empty multidimensional array.(Array of arrays)

var arrys = [[], [],];

// Question 21

// Declare and initialize a multidimensional array representing the following matrix:

var arrys = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];



// ** Chapter 15 to 17 End ** //








// ** Chapter 18 to 20 Start ** //



// Question 1

// Write a program to display the message “Hello World” 5 times in your browser using for loop.

for (var i = 1; i <= 5; i++) {
    document.write('Hello World' + "<br>")
}



// Question 2

// Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}


// Question 3

// Write a program to print multiplication table of any number using for loop. Table number & length should 
// be taken as an input from user.


var table = Number(prompt('Enter a number to print its multiplication table'))
var length = Number(prompt('Enter length of multiplication table'))

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>")
}



// Question 4

// You have an arrayA = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] Write each element on new line with the 
// help of for loop.

var mobile = ["Nokia", "Samsung", "Apple", "Sony", "Huawei",];

for (var i = 0; i <= 4; i++) {
    document.write(mobile[i] + "<br>")

}



// Question 5

// Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

var fruits = [' apple ', ' banana ', ' mango ', ' orange ', ' strawberry',];

for (var i = 0; i <= 4; i++) {
    document.write(fruits[i] + "<br>")

}

document.write("Element at index 0 is" + fruits[0] + "<br>")

document.write("Element at index 1 is" + fruits[1] + "<br>")
document.write("Element at index 2 is" + fruits[2] + "<br>")
document.write("Element at index 3 is" + fruits[3] + "<br>")
document.write("Element at index 4 is" + fruits[4] + "<br>")



// Question 6

// Write a program to initialize an array of N items by using prompt.Where N is number of items as entered by the user.

var items = Number(prompt('Enter number of items'));
var newarry = [];
for (var i = 0; i <= items; i++) {
    var item_name = prompt("Enter value for index " + (i) + ' : ');
    newarry.push(item_name + '<br>');

}
document.write(newarry);


// Question 7

// Generate the following series in your browser. See example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write('<h3>Counting</h3>')

for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write("<h3>Reverse counting</h3>")
for (var i = 10; i >= 1; i--) {
    document.write(i + ",")
}


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<h3>Even</h3>")

for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ",")

}


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<h3>odd</h3>")

for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + ",")

}


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("<h3>Even</h3>")

for (var i = 2; i <= 20; i = i + 2) {
    document.write(i + "k" + ",")

}


// Question 8

// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by 
// user input” in an array. After searching, prompt the user whether the given item is found in the list or not.


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



// Question 9

// Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]

var arr = [24, 53, 78, 91, 12];
var largestNumber = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The largest number is " + largestNumber);



// Question 10

// Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]


var numbers = [24, 53, 78, 91, 12];
var smallestNumber = numbers[0];
for (i = 0; i < numbers.length; i++) {
    if (arr[i] < smallestNumber) {
        smallestNumber = numbers[i];
    }
}
document.write("Array items: " + arr + "<br>");
document.write("The smallest number is " + smallestNumber);



// Question 11

// Write a program to identify the largest & the smallest number in the given array.A = [24, 53, 78, 91, 12]


var arr = [24, 53, 78, 91, 12];
var largestNumber = arr[0];
var smallNumber = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i];
    }
    if (arr[i] < smallNumber) {
        smallNumber = arr[i]
    }
}
document.write("The Numbers is " + arr + "<br>")
document.write("The small numbr is " + smallNumber + "<br>");
document.write("The largest number is " + largestNumber);



// Question 12

// Write a program to print multiples of 5 ranging 1 to 100

for (var i = 5; i <= 100; i = i + 5) {
    document.write(i + ",")
}




// Question 13

// You have given the following arrays: var students = ["Ali", "Sami", "Taha", "Inam"]; var scores = [58, 73, 89, 90];


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



// Question 14

// Write a program that prints number from start of the array to desired stop value. Given array: 
// var scores = [12, 45, 3, 22, 34, 50]; (Hint: take stop value from user) E.g. if user gives 3 as input 
// value print 12, 45, 3 if user gives 34 as input value print 12, 45, 3, 22, 34


var scores = [12, 45, 3, 22, 34, 50];


var stopValue = Number(prompt("Enter the stop value:"));


for (var i = 0; i < scores.length; i++) {

    if (scores[i] > stopValue) {
        break;
    }

    document.write(scores[i]);
}



// Question 15

// You have an array A = [ [1,2,3] , [4,5,6] , [7,8,9] ] Write each element on new line with the help of nested for  loops.


var multi_arry = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


for (var i = 0; i < multi_arry.length; i++) {

    for (var b = 0; b < multi_arry[i].length; b++) {

        document.write(multi_arry[i][b]);
    }
    document.write("<br>")
}



// Question 16

// Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing
//  by 0.5 each time, as long as x Value remains positive.

var num = Number(prompt("Enter the initial value of num:"));


while (num > 0) {
    document.write(num + "<br>");
    num -= 0.5;
}



// Question  17

// The even/odd reporter Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the 
// current number is even or odd, and report that to the screen (e.g. "2 is even").


for (var i = 0; i <= 20; i++) {

    if (i % 2 === 0) {
        document.write(i + " is even");
    } else {
        document.write(i + " is odd");
    }
    document.write("<br>")
}



// Question 18

//  Write a program to calculate the product of the odd integers from 1 to 7.

var product = 1;


for (var i = 1; i <= 7; i++) {

    if (i % 2 !== 0) {

        product *= i;
    }
}
document.write("Product of odd integers from 1 to 7: " + product);


// Question 19

// Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the 
// program will write out lines of stars where each line has one few star than the previous line. Initial number of stars: 7

var user_Stars = Number(prompt("Enter the initial number of stars:"));


for (var i = user_Stars; i >= 1; i--) {

    var line = "*".repeat(i);
    document.write(line + "<br>");
}


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


// ** Chapter 18 to 20 End ** //







// ** Chapter 21 to 25 Start ** //



// Question 1

// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable 
// titled  fullName. Greet the user using his full name.

var frist_name = prompt("Enter your First name here ")

var last_name = prompt("Enter your Last name here")

var full_name = frist_name + " " + last_name

document.write(" Hello " + full_name + "b<br>")


// Question 2

// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user 
// input in your browser.

var faverate_mobile = prompt(" Your Favorite Mobile Phone Name? ")

document.write("My Faverate Phone Is " + faverate_mobile + "<br>")

document.write(" Length of string " + faverate_mobile.length + " <br>")


// Question 3

// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

var country = "Pakistani "
document.write(country + "<br>")

var index = country.indexOf("n")

document.write(" index of n is " + index + " <br>")

// Question 4

// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var word = "Hello World "

var last_index_of_l = word.lastIndexOf("l");

document.write(word + "<br>" + " last index of l is " + last_index_of_l + "<br>")


// Question 5

// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var country = "Pakistani "
var find_crctr = country[3];
document.write(country + "<br>" + " character 3rd is " + find_crctr)


// Question 6

// Repeat Q1 using string concat() method.

var frist_name = prompt("Enter your First name here ")

var last_name = prompt("Enter your Last name here")

var full_name = frist_name.concat(last_name);

document.write(" Hello " + full_name + "<br>")



// Question 7

// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = "Hyderabad"
document.write("City :" + city + " <br>")

var replace = city.replace("Hyder", "Islam")


document.write("After replacement " + replace + "<br>")


// Question 8

// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and football together.”;


var message = "Ali and Sami are best friends. They play cricket and football together"

var new_message = message.replace(/and/g, "&")

console.log(message)
console.log(new_message)




// Question 9

// Write a program that converts a string “472” to a number 472.Display the values & types in your browser.

var numbr = "472"

var conver_string = Number(numbr);
document.write("Value " + numbr + "<br>")
document.write("Type " + typeof (numbr) + "<br>")
document.write("Value " + conver_string + "<br>")
document.write("Type " + typeof (conver_string) + "<br>")



// Question 10

// Write a program that take a URL as user input in the following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.


var link = prompt("Enter A URL ")

var new_link = link.replace('www.', '')


document.write('User URL is ' + link + "<br>")

document.write('Domain : ' + new_link)


// Question 11

// Write a program that takes user input. Convert and show the input in capital letters.

var input = prompt("Enter any Words here to convert words capital letters")

document.write("User Type a " + input + "<br>")
document.write("After converting Leters is " + input.toUpperCase());


// Question 12

// Write a program that takes user input. Convert and show the input in small letters.

var input = prompt("Enter any Words here to convert words small letters")

document.write("User Type a " + input + "<br>")
document.write("After Converting Leters is " + input.toLowerCase() + "<br>");


// Question 13

// Write a program that takes user input. Convert and show the input in title case.



var user_input = prompt("Enter Input: ");
var firstChar = user_input.slice(0, 1);
var otherChar = user_input.slice(1);
var title = firstChar.toUpperCase() + otherChar.toLowerCase();
document.write("User input: " + user_input + "<br>");
document.write("Title case: " + title);



// Question 14

// Write a program that converts the variable num to string. var num = 35.36 ;Remove the dot to display “3536” display 
// in your browser.


var num = 35.36;
var str = num.toString();
var dotIndex = str.indexOf(".");
str = str.slice(0, dotIndex) + str.slice(dotIndex + 1);
document.write("Number: " + num + "<br>");
document.write("Result: " + str);




// Question 15

// Write a program to display the value of x in your browser if a=”3” and b=”3”? x = a + b

var a = "3";
var b = "3";
var x = a + b;
document.write(x + "<br>")
// output 33



// Question 16

// Write a program to display the value of y in your browser if a=”3” and b=”3”? y = a - b;

var a = "3";
var b = "3";
var x = a - b;
document.write(x + "<br>")
// output 0




// Question 17

// Write a program to take user input and store username in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . , !], refer to ASCII table at 
// the end of this document.

/*Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64*/


var username = prompt("Enter your name: ");
var charValue;
for (var i = 0; i < username.length; i++) {
    charValue = username[i].charCodeAt(0);
    if (charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64) {
        alert("Please enter a valid username")
    }

}


// Question 18

// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user
//  input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
//  Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:



var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var query = prompt("What do you want to order: ");
query = query.toLowerCase();
var check = false;
for (var i = 0; i < arr.length; i++) {
    if (query === arr[i]) {
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        check = true;
    }
}
if (check === false) {
    document.write("We are sorry. " + query + " is not available in our bakery");
}



// Question 19

// Write a program to take two input strings. Using string comparison, tell which string is greater than other or 
// if they both are equal.


var string_1 = prompt("Type A string Number 1")


var string_2 = prompt("Type A string Number 2")

if (string_1 > string_2) {

    document.write(string_1 + " is greater than from " + string_2)

} else if (string_1 < string_2) {
    document.write(string_1 + " is less than from " + string_2)
}
else {
    document.write('both strings are equal')
}



// Question 20

// Write a program to take password as an input from user. The password must qualify these requirements: a. It 
//should contain alphabets and numbers. b. It should not start with a number. c. It must at least 6 characters long 
//If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII  table at the end of this document.















// Question 21

// Write a program to convert the following string to an array using string split method. var university = 
// “University of Karachi”; Display the elements of array in your browser.


var uni_name = "University of Karachi";
var arr = uni_name.split(" ");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}



// Question 22

// Write a program to display the last character of a user input

var str = prompt("Enter your message: ");
document.write("User Input: " + str + "<br>");
document.write("Last character of input: " + str[str.length - 1]);



// Question 23

// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences 
// of word “the” in given string.



var message = "the quick brown fox jumps over the lazy dog";
var count = (message.match(/the/g) || []).length;
document.write("Text: " + str + "<br>");
document.write("There are " + count + " occurrence(s) of the word 'the'");



// Question 24

// Write a program to count number of vowels & consonants in given string var str = “Pakistan”;



var str = "Pakistan";

var lowercaseStr = str.toLowerCase();


var vowelCount = (lowercaseStr.match(/[aeiou]/g) || []).length;
var consonantCount = (lowercaseStr.match(/[bcdfghjklmnpqrstvwxyz]/g) || []).length;


document.write("Number of vowels:", vowelCount + "<br>");
document.write("Number of consonants:", consonantCount);



// ** Chapter 21 to 25 End ** //