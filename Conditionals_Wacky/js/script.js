// Jonathan Torres
// April 17, 2014
// Conditionals Wacky

//inital greeting
alert("Welcome to Wacky Land!!!!");
//A prompt for a name
var name = prompt("First let me get your name please.");
// a wacky question
var alien = prompt("And are you a alien or a human?");
//just for fun alert
alert("HA HA HA... Last question was a joke lol!!!!");

//an array
var loonyToons = ["bugs", " speedy gonzales", " sylvester", " tweety", " daffy duck"];
//the prompt that will ask the main question
var wacky = prompt("Which Loony Toons character is your favorite? \n"+loonyToons);
// final variable
var toons;

// now the conditionals
if (wacky == loonyToons[0]){
	//each toon will have their fav quote 
	//this is for bugs
	toons = "Whats up doc!";
}
//this is for speedy 
if (wacky == loonyToons[1]){
	toons = "Andale, Andale, Arriba, Arriba!!!";

}
//this is for sylvester
if(wacky == loonyToons[2]){
	toons = "Sufferin Succotash!";

}
//this is for tweety
if(wacky == loonyToons[3]){
	toons = "I thought I saw a puddy tat?";
}
//this is for daffy duck
if (wacky == loonyToons[4]){
	toons = "You're Desthpicable";
}

//this will alert the user with the final message showing what they picked 
alert(toons+ " Your favorite Loony Toons character is "+wacky+ " thanks for playing "+name+ " see you later "+alien+".");
//this will print out to the console
console.log(toons+ " Your favorite Loony Toons character is "+wacky+ " thanks for playing "+name+ " see you later "+alien+".");

