// Jonathan Torres
// April 17, 2014
// Conditionals Personal


//this will be my starting prompt 
var gender = prompt("Are you a boy or a girl?");
// I will be using this decide what the winner recieves
var winner;

//This is the same if condition
if (gender == "boy"){
	//new statement gives the boy a game 
	winner = "You won a new video game!";
	//the else condition for if you choose the girl
	}else{
		// this is what the girl wins
	winner = "You won a free $100 shopping card!"

}
//this will print to console
console.log(winner);
//this will alert the user of their prize
alert(winner);
