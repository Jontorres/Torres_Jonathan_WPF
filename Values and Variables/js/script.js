//JavaScript


/*
//Values and Variables
var yearBorn = 1955;
console.log("Hellow World!");
console.log(yearBorn);
alert(yearBorn);
*/


/*
//Declaring Variables
//Declare before you define.
var age;

// Defining Variables 
//Variables of Different Types, Numbers, Booleans and Strings
age = 38;// Number variable
//storage container = value

var yearOfBirth = 1970;//declaring and defining on the same line.

var isStudent = false;//Boolean Variable
//Boolean Variables are either On or Off, False or True

var firstName = "Joanthan";//String variable
//needs to have quotes either single or double
// becarful when using a single quote

//var phrase = 'I don't know'; this would be wrong

//to fix you can do this 
var phrase = 'I don\'t know';
// or you can do this 
var phrase = I don\'t know \n You\'ll have to speak with the professor';
// \n is just making the second half be shown on a new line what is important is to use the backslach to show that the ' is not the end of a quote.
*/


/*
//Arrays
var muppetNames = ["Kermit", "Miss Piggy"]; //this makes a list, 0,1,2,3
//index starts with 0 so kermit would be 0, piggy would be 1 and so on
//, "Gonzo", "Rizzo" took these out
console.log(muppetNames[2]);
muppetNames[1] = "Rizzo"; //this is if you want to change miss piggy's name
muppetNames[2]= "Fozzy";//adding this to fozzy
// can also use var instead of the numbers 
 var num = 1;
console.log(muppetNames[num]);
*/


/*
//Expressions
var a = 2;//sets up our variable a and defiens it as 2
//a + 3; add 3 to A suppose to  but will not because it is not storing it 
//so to make add up to five you have to add this--
var b; //if want to store the value of 5 in B instead of A
b = a + 3;// this stores five into the A variable by usng = which is an assingment operator 
console.log(b);
// A's value would now be 2 and B's value is now 5
*/



/*
//Expressions - Age example
var yearBorn =1991;
var age = 2014 - yearBorn - 1; //if you have not had a birthday yet
console.log(age);
*/



/*
//Expressions - Arithemtic Operators
//area of the triangle is half the width times the height
var width = 8;
var height = 7;
var area = width * height/2;// multiplecation symbole is an * and division is / 
// You could divide the area on a seprate line by doing this 
//area = area/2 or area * .5
console.log(area);
*/



/*
//Expressions - Modulo Operator
var remainder = 211 % 2 //this is to get the remainder not the result of a division 
// this is useful to tell whether a number is even or odd
console.log(remainder);
*/




/*
//Expressions - PEMDAS - Order of operations 
var quiz1 = 87;
var quiz2 = 100; 
var quiz3 = 60;
var quiz4 = 80;
//The average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average);

var length = 7 ;
var width = 6;
var perimeter = length * 2 + width * 2;/*this does not need parentheses since * 
comes first in the operations
console.log(perimeter);
*/


/*
//Expression - Using Arrays in Expressions
var orangeBins = [234, 567, 883];
var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);
*/



/*
//Expression - Concatenating Strings
var firstName = "Joanthan";
var lastName = "Torres";
var fullName = firstName +" "+lastName;
console.log(fullName);

var a = 6;//so by taking out the "" and making them a number then they will be add not combined
var b = 7;
var result = a + b;
console.log(result);//strings can only be combined 
*/



/*
//Expressions - Casting
var stringVar = "6";
var result = 7 + Number(stringVar);// by putting () around stringVar and then Number in front you are casting stringVar as a number
console.log(result);


var areaCode = 407;
var firstPart = 203;
var secPart = 4529;
//(407) 203-4529
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);
//This is how to change numbers into strings
*/

