/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/


function generateMultiples (limit, x, y) {

	var toAdd = {};

	toAdd.x = [];
	toAdd.y = [];
	
	var xx = 0;
	var yy = 0;
	
	while(xx < limit - x) { toAdd.x.push(xx += x) }
	while(yy < limit - y) { toAdd.y.push(yy += y) }

	return toAdd;

}

function addMultiples (toAdd) {
	
	var combinedAndUnique = _.union(toAdd.x, toAdd.y)

	var total = 0;
	combinedAndUnique.forEach(function(d){
		total += d
	})

	return total;

}

var twoArrays = generateMultiples(1000, 5, 3)
var answer = addMultiples(twoArrays)
console.log('answer === ' + answer)

//answer === 233168









