

//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

let a = 3
let b = 5
console.log("the sum of 3 and 5 is:" +(a+b))

//2. Repeat task1 for subtraction, multiplication, division &
//modulus.

                      //for Subtraction//

let c = 3
let d = 5
console.log("the subtraction of 3 and 5 is:" +(c-d))

                  //for Multiplication//

let f = 3
let e = 5
console.log("the multiplication of 3 and 5 is:" +(e*f))
                  
                   //for division//

let j = 25
let i = 5
console.log("the division of 25 and 5 is:" +(i/j))
                                     
                   //for Modulus//

let k = 10
let l = 5
console.log("the modulus of 10 and 5 is:" +(k%l))

//3. Do the following using JS Mathematic Expressions
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

let age

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.

document.write("Value after variable declaration is Undefined ")

// c. Initialize the variable with some number.

let initialValue = 23

// d. Show the value of variable in your browser like “Initial
// value: 5”.

document.write("<br>"+" The initial  value is :"+23)

// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

document.write("<br>"+"Value after increment is :" + (++initialValue))

// g. Add 7 to the variable.
let y= 24
let z = 7
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("<br>"+"Value after addition :" + (y+z))
// i. Decrement the variable.
let num = 45

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("<br>" + "Value after decrement is:" + (--num) )

// k. Show the remainder after dividing the variable’s value
// by 3.

let numb = 6;
let numB = 3 ;

// l. Output : “The remainder is : 
document.write("<br>" + "the reminder is :" + (numb%numB) )


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

let ticket = 600;
document.write("<br>" + "the cost of buying 5 tickets is :"+ (ticket * 5) + "PKR"); 
 


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

document.write( "<br>"+" <h1>Table of 5 </h1>" );

for(let i = 5; i <51; i += 5){
    document.write("<br>" +i+ "<br>" )
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

let celsius = 37;
 document.write("<br>" + "37C is to " + ((celsius * 9/5)+32) + "F")
 
 let  Fahrenheit = 25;
 document.write("<br>" + "25F is to " + ((  Fahrenheit -32)*5/9) + "C")
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.


document.write("<h1>Shopping Cart</h1>")
let item1 = 700 ;
let q1 = 3;
document.write("<br>" + "the price of item 1 is :" + item1)
document.write("<br>" + "the quantity  of item 1 is :" + q1)


let item2 = 789;
let q2 = 4;
document.write("<br>" + "the price of item 2 is :" + item2)
document.write("<br>" + "the quantity  of item 2 is :" + q2)
document.write("<br>" + "The shipping charges is : 100"  ); 
document.write("<br>" + "the total cost  is :" + (item1 * q1  +item2* q2))

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write("<h1>Mark Sheet</h1>")
let totalmark = 500;
let obtainedmark = 300;
document.write("<br>" + "the total marks is " + totalmark  ); 
document.write("<br>" + "The obtainedmark is : " +obtainedmark  ); 
document.write("<br>" + "The percentage  is :" + ((obtainedmark/totalmark)* 100) + "%" ); 

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Currency In PKR </h1>")
let USdollar = 10 ;
let currencyChange = 104.80;
let Riyal = 25;
let Pakistan_currency_change = 28;
document.write("<br>"+"total currency in PKR:  "+((USdollar*currencyChange)+(Riyal*Pakistan_currency_change)))

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let nymber = 6
document.write("<br>"+"The answer is:"+nymber*10);
document.write("<br>"+"The answer is:"+nymber+5);
document.write("<br>"+"The answer is:"+nymber/2 );


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
document.write("<h1> Age Calculator </h1>")
let CurrentYear = 2024;
let BirthYear = 2001;
document.write("their age may be:"+(CurrentYear-BirthYear));


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
document.write("<h1>Geomaterizer</h1>")
let radius = 23;
document.write("<br>"+"The circumference is:"+(2*3.142*radius));
let Radius = 16;
document.write("<br>"+"The Area of a circle is:"+(2*3.142*Radius));

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

let favouriteSnake = Chocolatechip
document.write("<br>"+"favourite Snake:"+favouriteSnake)
let currentage = 17;
document.write("<br>"+"Current Age :"+currentage)
let Maximumage = 50;
document.write("<br>"+"Maximum Age :"+Maximumage)
let amount = 2;
document.write("<br>"+"Amount :"+amount)
document.write("<br>"+"you will need"+(50*2)+"to last you until the ripe old age of 50")




