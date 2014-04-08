/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

var start = Date.now();
var validated = false;
var iterator = 2520;

while (validated === false) {

	for (i=3; i<=20; i++) {
		if (iterator % i !== 0) {
			iterator += 2;
			i=3;
		} else if (i === 20) {
			validated = true;
		}
	}

	if (validated === true) {
		var time = Date.now() - start;
		console.log("Found it: " + iterator + " ...and it took: " + time + " milliseconds.")
	}

}

/SOLVED/
// Found it: 232792560 ...and it took: 3592 milliseconds.
