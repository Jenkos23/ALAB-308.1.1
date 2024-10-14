// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

//check if is under 25
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`The numbers is under 25: ${isUnder25}`);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);




// Part 1: Math Problems
//check if is divisible by 5
const isdivideBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;

console.log(`${isdivideBy5}:The four number are all divisble by 5`);

//check if the first number is larger than the last

 let firstbigthanFive = (n1 > n4);
console.log(`The first number is larger than the last nmuber: ${firstbigthanFive}`);

 //Arithmetic chain
 console.log(`This is the answer to the arithemetic chain: ${(((n1-n2)* n3 ) % n4)}`)
 

 

 // Part 2: Prctical Math
 let distanTotalTrip = 1500; // unit measurement is in miles
 let galon55perHour = 30;  // unit measurement is in miles per gallon
 let galon60perHour = 28;  // unit measurement is in miles per gallon
 let galon75perHour = 23;  // unit measurement is in miles per gallon
 let estFuelBudg = 175;  //Calculated in dollars
 let AvgCostperFuel = 3;  //Calculated in dollars
 let per55Hours = 55; // estimated miles per hour
 let per60Hours = 60; // estimated miles per hour
 let per75Hours = 75; // estimated miles per hour




// How much it will cost for galon55perHour 
 let est55milesFuel = (distanTotalTrip/ galon55perHour) * AvgCostperFuel;
 console.log(` It will cost $${est55milesFuel} to travel at 55 miles per hour`);

// How much it will cost for galon60perHour 
let est60milesFuel = (distanTotalTrip/ galon60perHour) * AvgCostperFuel;
 console.log(` It will cost $${est60milesFuel} to travel at 60 miles per hour`);

 // How much it will cost for galon60perHour 
let est75milesFuel = (distanTotalTrip/ galon75perHour) * AvgCostperFuel;
console.log(` It will cost $${est75milesFuel} to travel at 75 miles per hour`);

// How many gallons will I need to travel for 1500 miles galon55perHour 
let est55pergallon = distanTotalTrip/ galon55perHour;
 console.log(` It will take the total of ${est55pergallon} gallons to travel at 55 miles `);

 // How many gallons will I need to travel for 1500 miles galon60perHour 
let est60pergallon = distanTotalTrip/ galon60perHour
console.log(` It will take the total of ${est60pergallon} gallons to travel at 60 miles `);


// How many gallons will I need to travel for 1500 miles galon75perHour 
let est75pergallon = distanTotalTrip/ galon75perHour;
 console.log(` It will take the total of ${est75pergallon} gallons to travel at 75 miles `);


 //How long will it take in hours
 let estHour55forTrip = distanTotalTrip/per55Hours;
 console.log(` It will take apprioximately ${estHour55forTrip}hrs to travel at 55 miles per hour `);

 let estHour60forTrip = distanTotalTrip/per60Hours;
 console.log(` It will take apprioximately ${estHour60forTrip}hrs to travel at 60 miles per hour `);

 let estHour75forTrip = distanTotalTrip/per75Hours;
 console.log(` It will take apprioximately ${estHour75forTrip}hrs to travel at 75 miles per hour `);

console.log(` Comparing the results, It depends on the individual making the trip, 
most will not mind spending alot to get to there destination on time. 
Most appriopately traveling at 55 miles per hour, for 30 miles per gallon is less expensive.`)