/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


function findLargestFactor(primeNumber) {

	var factors = [];
	var aa = primeNumber;

	for (i = 2; i <= aa; i++) {

		var intRegex = /^\d+$/;

		if (intRegex.test(aa/i)) {
			factors.push(i)
			aa = aa/i
		}

	}

	console.log(factors)
	return _.max(factors)

}

findLargestFactor(600851475143);

