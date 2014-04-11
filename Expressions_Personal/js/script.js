//Jonathan Torres
//April 10, 2014 
//Expressions_Personal

//This will show how much time is spent at the gym in a week

//Adding this alert so that these questions make more sense
alert("Would you like to see how much time you spend working out in a week if so please answer \nthe following questions!")

//This first prompt will gather the amount of days that the user goes to the gym
var days = prompt("How many days do you go to the gym in a week?");
//The next prompt will find out how many hours the user works out at the gym
var hours = prompt("How many hours a day do you work out?");
//this will now tell us the amount of exercise in a week the user does
var exercice = days * hours;
//checking to see if the expression works
console.log("The amount of exercice you do is "+exercice+" hours a week!");
//adding an alert so the user may see the answer
alert("The amount of exercice you do is "+exercice+" hours a week!")

//This will tell how many days you do not work out
var noDays = prompt("How many days do you not work out in a week?");
//This will tell how much time you do not do any activities on the days you do not work out
var noHours = prompt("How much time do you sit on the days you do not work out?")

