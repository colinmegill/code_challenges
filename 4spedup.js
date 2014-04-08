var first = 999;
var second = 999;
var currentNumber = "foo";
var palindromes = []

function isPalindrome(str) {
	return str === str.split('').reverse().join('');
}

function calculateLargest() {

	while(palindromes.length < 40) {
		currentNumber = first * second;
		if (isPalindrome(currentNumber.toString()) === true) {
			palindromes.push("_" + currentNumber + " " + first + " " + second);
		}
		if (second > first) {
			second--
		} else {
			first--;
			second = 999;
		}
	}

	console.log(palindromes)
}

calculateLargest()