//Jonathan Torres
//May 1, 2014
//Functions Wacky

//opening alert 
alert("A long time ago in a galaxy far, far away...");
//opening console
console.log("A long time ago in a galaxy far, far away...")
alert("STAR WARS!!!!");
console.log("STAR WARS!!!!");


//variable for sith
var sith = "Sith";
//variable for jedi
var jedi = "Jedi";
//fucntion
function starWars(theForce){
//if statement
	if (theForce == "Jedi"){
		//var for light side
		var lightForce = " may the force be with you";
		//alert
		alert("Welcome young "+ theForce+ lightForce+ "!");
		//console.log
		console.log("Welcome young "+ theForce+ lightForce+ "!");
		//else if 
	}else if(theForce == "Sith"){
		//variable for darkside
		var darkForce = " come to the dark side we have cookies";
		//alert
		alert("Welcome young "+ theForce+ darkForce+ "!");
		//console.log
		console.log("Welcome young "+ theForce+ darkForce+ "!");
		//else
	}else{
		//alert
		alert("Please choose a side!");
		//console.log
		console.log("Please choose a side!");

	}
	
}

//variable for first prompt 
var choiceOne = prompt("Would you like to play as a Jedi or Sith today?");
//calling function
starWars(choiceOne);
//if no answer 
if(choiceOne != "Jedi" || "Sith"){
	//repeat of prompt one
	var choiceOne = prompt("Would you like to play as a Jedi or Sith today?");
	//repeat for calling
	starWars(choiceOne);
	
}

//variable for prompt two 
var choiceTwo = prompt("Would you like to continue playing as the last side you choose or would you like to play the other side? Please choose Jedi or Sith.");
//second calling of function
starWars(choiceTwo);
//if no imput 
if(choiceTwo != "Jedi" || "Sith"){
	//repeat prompt one
	var choiceOne = prompt("Would you like to play as a Jedi or Sith today?");
	//repeat calling function
starWars(choiceOne);
}


//end alert and console
alert("The End!");
console.log("The End!");