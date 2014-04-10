//JavaScript
//Values and Variables
/*
var yearBorn = 1955;
*/

/*
console.log("Hellow World!");
console.log(yearBorn);
	*/

/*
alert(yearBorn);
*/

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
//var phrase = 'I don\'t know';
// or you can do this 
//var phrase = I don\'t know \n You\'ll have to speak with the professor';
/* \n is just making the second half be shown on a new line what is important 
is to use the backslach to show that the ' is not the end of a quote.
*/

//Arrays

var muppetNames = ["Kermit", "Miss Piggy"]; //this makes a list, 0,1,2,3
//index starts with 0 so kermit would be 0, piggy would be 1 and so on
//, "Gonzo", "Rizzo" took these out
//console.log(muppetNames[2]);
muppetNames[1] = "Rizzo"; //this is if you want to change miss piggy's name
muppetNames[2]= "Fozzy";//adding this to fozzy
// can also use var instead of the numbers 
 var num = 1;

console.log(muppetNames[num]);
