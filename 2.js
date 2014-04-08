/* 
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

var evens = [2];

var nMinus2 = 1;
var nMinus1 = 2;
var n = 2;

var sum = 0;

function generateEven () {

		n = nMinus1 + nMinus2

		nMinus2 = nMinus1
		nMinus1 = n;

		
		if (n % 2 === 0) {
			evens.push(n)
		}

		return;

}

while (n < 4000000) {
	generateEven();
}


_.each(evens, function(d){

	sum += d;

})

console.log(sum);