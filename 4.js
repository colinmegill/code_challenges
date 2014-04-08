/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

aa = 999
bb = 999

1. starting from 999*999, aa * bb = result
2. decrement aa from 999 to 100 
3. once aa has reached 100, decrement bb
4. each time aa changes, check if result is a palindrome 
5.

*/

// compute all the palindromes for two numbers
// var numbers = { first: 2, second: 3 }
// palindromes(numbers)

var _ = require('underscore')

function palindromes(obj) {

	var allPalindromes = [];
	var aa = obj.first;
	var bb = obj.second;
	var currentNumber = 1337;
	var check = false;

	function palindromeVerifier (num) {
		var stringNum = num.toString();
		var forwards = [];
		var backwards = [];
		for (i = 0; i < stringNum.length; i++){
			forwards.push(stringNum[i]);
			backwards.push(stringNum[i]);
		}
		backwards.reverse()
		return _.isEqual(forwards, backwards)
	}
	
		while (bb > 100) {

			currentNumber = aa*bb;
			check = palindromeVerifier(currentNumber)
			
			if (check === true) {
				allPalindromes.push({first: aa, second: bb, palindrome: currentNumber})
				console.log({first: aa, second: bb, palindrome: currentNumber})
			}
			
			aa--;

			if (aa <= 100) {
				bb--;
				aa = obj.first;
			}
		
		}

		return allPalindromes;


}

//execute!

var p = palindromes({first: 999, second: 999})
var answer = _.max(p, function(d){ return d.palindrome; });

console.log('the answer is: ' + answer.palindrome)


/SOLVED/
//the answer is: 906609




