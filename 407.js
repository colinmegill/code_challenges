/*

Problem 407

If we calculate a2 mod 6 for 0 ≤ a ≤ 5 we get: 0,1,4,3,4,1.

The largest value of a such that a2 ≡ a mod 6 is 4.
Let's call M(n) the largest value of a < n such that a2 ≡ a (mod n).
So M(6) = 4.

Find ∑M(n) for 1 ≤ n ≤ 107.

*/

var _ = require('underscore');

function summation (min, max) {

	var mlist = [];
	var sum = 0;

	for (i = min; i <= max; i++) {

		var highestNotFound = true;
		var j = i-1;

		while (highestNotFound || j <= 0) {
			var remainder = (j*j) % i;
			if (j === remainder) {
				mlist.push(j)
				console.log(mlist)
				highestNotFound = false;
			} else {
				j--;
				return;
			}
		}
	}

	_.each(mlist, function(d){ return sum += d })

	return sum;
}

var answer = summation(1, 10000000)
console.log(answer)








/*

If we calculate a^2 mod 6 for 0 ≤ a ≤ 5 we get: 0,1,4,3,4,1.

The largest value of a such that a2 ≡ a mod 6 is 4.

Let's call M(n) the largest value of a < n such that a2 ≡ a (mod n).
So M(6) = 4.

*/










