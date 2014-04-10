//Jonathan Torres
//April 10, 2014
//Expressions Worksheet


//Dog Years
//Caculate how old Sparky the pit bull is in dog Years
//For every 1 human year dogs age goes up by 7 

//this is Sparky's age in human Years
var sparkyAge = 10;
//this is the dog years that will need to be multiplied for correct age
var dogYears = 7;
//multiply the humanAge with the dogYears
var result =  sparkyAge * dogYears;
//This will print out the result
console.log(result);
//This is Sparky's age x in human years which is X in dog years
console.log("Sparky is "+sparkyAge+" human years old which is "+result+" in dog years");
//I added an alert for fun, but this show the viewer the answer
alert("Sparky is "+sparkyAge+" human years old which is "+result+" in dog years");


//Slice of Pie part 1
//How many slices of pizza will each party goer get

//This is how many slices the pizza was cut into
var pizzaSlices = 25;
//This is how many people showed up to the party
var partyGoers = 10;
//There were 5 pizzas bought 
var pizzas = 5; 
//We must multiply the slices by the pizzas then divid it among the partygoers
var slices = pizzaSlices * pizzas / partyGoers;
//This will print out the result
console.log(slices);
//this is the message that will show up in the console.log
console.log("Each person ate "+slices+" slices of pizza at the party.");
//This will show the user the answer
alert("Each person ate "+slices+" slices of pizza at the party.");


//Slice of Pie part 2
//How many slices of pizza will Sparky get
//The givens will be the ones used from the first part
//This is the remainder that Sparky gets 
var sparkyShare = slices % 5;
//This will print out the result
console.log(sparkyShare);



