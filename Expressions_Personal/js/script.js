//Jonathan Torres
//April 10, 2014 
//Expressions_Personal

//This will show how much time is spent at the gym in a week

//Adding this alert so that these questions make more sense
alert("Would you like to see how much time you spend working out in a week if so please answer \nthe following questions!");


//This first prompt will gather the amount of days that the user worksout
var days = prompt("How many days do you workout in a week?");
//The next prompt will find out how many hours the user works out 
var hours = prompt("How many hours a day do you work out?");
//this will now tell us the amount of exercise in a week the user does
var exercice = days * hours;
//This will print out the answer to the console
console.log("The amount of exercice you do is "+exercice+" hours a week!");
//adding an alert so the user may see the answer
alert("The amount of exercice you do is "+exercice+" hours a week!")


//now adding an alert for the second question
alert("Now would you like to see how much you do not exercice in a week, if so please answer the next questions!");

//This will tell how many days you do not work out
var noDays = prompt("How many days do you not work out in a week?");
//This will tell how much time you do not do any activities on the days you do not work out
var noHours = prompt("How much time do you sit on the days you do not work out?")
//This will caculate how long the user is inactive in a week
var couchPotato = noDays * noHours;
//This will print out the answer to the console
console.log("You do not exercice "+couchPotato+" hours a week, you may be a couch potato!");
//adding an alert that will show the user the hours they do not work out a week
alert("You do not exercice "+couchPotato+" hours a week, you may be a couch potato!");

//Now we will get the average for the month 
alert("Would you like to see your average hours of excerice a month... yes? Okay good continue on!")

