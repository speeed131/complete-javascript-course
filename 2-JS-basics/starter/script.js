// console.log('Hello world!');

// var firstName = 'Daiki';
// console.log(firstName);

// var fullAge = true;
// console.log(fullAge);



// var age, job, isMarried;


// age = 'twenty eight';
// job = 'driver';
// isMarried = false;

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);



// var year, yearJohn, yearMark, ageJohn, ageMark;

// ageJohn = 28;
// ageMark = 33;

// var johnOleder = ageJohn < ageMark;

// console.log(johnOleder);

// console.log(typeof johnOleder);



// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// - が先にくる。



// var heightDaiki, massDaiki, heightGen, massGen, DaikiBMI, GenBMI;

// heightDaiki = 1.6;
// heightGen = 1.8;

// massDaiki = 53;
// massGen = 70;

// DaikiBMI = massDaiki / (heightDaiki * heightDaiki);

// console.log(DaikiBMI);


// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');



// var scoreJohn = (189 + 120 + 103) / 3;
// var scoreMike = (129 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points');
// } else {
//     console.log('There is a draw');
// }


// if (scoreJohn > scoreMike) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw');
// }

// console.log(calculate(3,8));


// こっちは定義が先にないと、動かない。
// var calculate = function(x, y){
//     return  x + y ;
// };


// こっちは、定義が後でも動く。
function calculate(x, y){
    return x + y;
};



// * CODING CHALLENGE 3
// */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/



function calculator(bill){
    if(bill < 50){
        tip = bill * 0.2;
    }
    else if(50 <= bill <= 200)
    {
        tip = bill * 0.15;
    }
    else if(200 < bill)
    {
        tip = bill * 0.1;
    };
    return tip;
};


var x, y, z

x = calculator(124);
y = calculator(48);
z = calculator(268);

var john = [x, y, z];



console.log();


