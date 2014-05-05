//Jonathan Torres
//May 1, 2014
//Functions

// So I will be asking what you will want to eat for each meal in a day.
// the function will be foodDemand

var foodDemand = function(food){
	//In side the function I will have the code that will give the user their response
	alert("I would like to eat "+ food+ ".");
	//I wil also add in the console.log so that it will print out the answer in the console
	console.log("I would like to eat "+ food+ ".");
}

// now I will give the prompt for breakfast 
var breakFast = prompt("What would you like to eat for breakfast?");
//This will call the function so that the code will work 
foodDemand(breakFast);
//now the second propmt will ask about lunch
var lunch = prompt("What would you like to eat for lunch?");
//now calling the function
foodDemand(lunch);
// now we will ask about dinner
var dinner = prompt("What would you like to eat for dinner?");
//and now calling function again
foodDemand(dinner);
//This will be the closing alert and console.log
alert("We shall have "+ breakFast+ " for breakfast, " + lunch+ " for lunch" +" and for dinner "+dinner+ ", hope you enjoy!");

console.log("We shall have "+ breakFast+ " for breakfast, " + lunch+ " for lunch" +" and for dinner "+dinner+ ", hope you enjoy!");

