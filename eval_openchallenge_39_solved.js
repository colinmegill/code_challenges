var happyNumbers = [];
var unhappyNumbers = [];

//require the 'fs' module
var fs  = require("fs");
//Read the file from the filesystem, pass into a callback function each number to be checked
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
		//if the line isn't empty run isHappyOrUnhappy function passing in the number as the arg
    if (line != "") {
        isHappyOrUnhappy(line);
    } else {
    	//we have an empty string, so we've reached the end of the file and we're done
    	return;
    }
});

/* We create two arrays. This is to speed the program up. While it evaluates, we'll push numbers we KNOW are happy or unhappy onto these arrays. That way, we don't have to run the expensive logic of the program again if we already know that the number is one or the other */



//small helper function to square a number 
function square (x) {
	return x * x;
}

/* this is a helper function that first breaks up a number into individual integers into an array,
then iterates over that array and squares each number, adding it to a total. 

for instance, let's say the number is 5678. first, it will split it into:
["5","6","7","8"]
next, it will iterate over that array, taking the string in each position, converting it BACK to an integer (we had to convert it to a string to use the 'split' method...), then we square it and add it to the total. 

*/
function addSquaresOfComponents (num) {
	var total = 0;
	var numArray = num.toString().split('');
	for (i=0; i<numArray.length; i++) {
		total += square(parseInt(numArray[i]))
	}
	return total;
}

//set the new value, THEN check.

function looper (num) {

	var num = parseInt(num);
	var computedValues = [];

	while (true) {
		computedValues.push(num);
		num = addSquaresOfComponents(num);

		if (num === 1) { 

		console.log('num === ' + num)
		console.log('computedValues === ' + computedValues)

			happyNumbers.concat(computedValues);
			return 1;

		}

		if (computedValues.indexOf(num) > -1) {
		
		console.log('num === ' + num)
		console.log('computedValues === ' + computedValues)

			unhappyNumbers.concat(computedValues);
			return 0;

		}
	}
}

/* 
Three conditions are possible:
	1. We already have the number in our HappyNumbers array and so we return 1 right off the bat.
	2. We already have the number in our UnhappyNumbers array and so we return 0 right off the bat.
	3. We don't know whether the number is happy or unhappy, so we head off to our looper function!
*/

function isHappyOrUnhappy (num) {

	console.log('isHappyOrUnhappy running...' + num)  

	if (happyNumbers.indexOf(num) > -1) {
		console.log(1)
		return
	} 
	if (unhappyNumbers.indexOf(num) > -1) {
		console.log(0)
		return
	}  

	var answer = looper(num)
	console.log(answer)

}

