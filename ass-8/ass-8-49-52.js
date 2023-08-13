// ** Chapter 49 to 52 Start ** //


// ** EVENTS START ** // 


// // Question 1

// Create a signup form and display form data in your web page on submission.

function chkForm() {
    var nameValve = document.getElementById("name").value;

    var mailValve = document.getElementById("mail").value;

    var passwordValve = document.getElementById("pas").value;

    var numberValve = document.getElementById("number").value;

    document.write("<h1>", "Your Foam Is Submitted & Your Inputs Is", '</h1>', "<br>")


    document.write("Name Is ", nameValve, "<br>")
    document.write("Email is ", mailValve, "<br>")
    document.write("Password is ", passwordValve, "<br>")
    document.write("Number is ", numberValve)


    if (nameValve && mailValve && passwordValve && numberValve) {
        alert("Your Form Is Submitted")
    } else {
        alert("Please Input All Information")
    }
}


// // Question 2

// Suppose in your webpage there is content area in which  you have entered your item details, but user can only see  some details on first look. When user clicks on “Read more” button, full detail of that particular item will be  displayed.

function moreRead() {
    var fullPrgh = "Front-End Development: Also known as client-side development, front-end development focuses on creating the user interface and experience. It involves using HTML (Hypertext Markup Language) for structuring content, CSS (Cascading Style Sheets) for styling and layout, and JavaScript for interactivity and dynamic content. ";

    document.getElementById("short").innerHTML = fullPrgh;


}


    // ** EVENTS END ** //
  // ** Chapter 49 to 52 Wnd ** //