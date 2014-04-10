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
//this is the message that will show up in the console.log
console.log("Each person ate "+slices+" slices of pizza at the party.");
//This will show the user the answer
alert("Each person ate "+slices+" slices of pizza at the party.");


//Slice of Pie part 2
//How many slices of pizza will Sparky get
//The givens will be the ones used from the first part
//This is the remainder that Sparky gets 
var sparkyShare = slices % 5;
//this is the message that will show up in the console.log
console.log("Sparky got "+sparkyShare+" slices slices of pizza.");
//This will show the user the answer
alert("Sparky got "+sparkyShare+" slices of pizza.");


//Average shopping bill
//Average weekly grocery shopping spending over the past five weeks
//this is the array for the shopping bills over 5 weeks
var groceryBills = [250.00, 135.08, 453.45, 100.05, 94.25]
//this is the total spent over 5 weeks
var grocerytotal = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] +groceryBills[4];
//this is the average spent over the 5 weeks
var groceryAverage = grocerytotal / 5;
//This will print out the result
console.log("You have spent a total of "+grocerytotal+" on groceries over 5 weeks. That is an average of "+groceryAverage+" per week");
//This will show the user the answer
alert("You have spent a total of "+grocerytotal+" on groceries over 5 weeks. That is an average of "+groceryAverage+" per week");


//Discounts
//What is the discounted price with and without sales tax

