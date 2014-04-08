//require the fs module 

var happyNumbers = [];
var unhappyNumbers = [];

var fs  = require("fs");
//Read the file from the filesystem and pass into a callback function each number to be checked 
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {

	//if the line isn't empty run isHappyorUnhappy function passing in the number as the arg
    if (line != "") {
    	isHappyorUnhappy(line);
    } else {

    	//we have an empty string, so we've reached the end of the file
    	return; 
    }

    }
});







//small helper function to square a number

function square (x) {
	return x * x;
}

//helper function 

function addSquaresofComponents (num) {
	var total = 0;
	var numArray = num.toString().split('');
	for (i=0; i<numArray.length; i++) {
		total += square(parseInt(numArray[i]))
	}
	return total; 
}


function looper (num) {
	console.log ('looper running...' + num)
	var placeholder1 = num;
	var placeholder2 = [];

	while (placeholder1 !== 1 && placeholder2.indexOf(placeholder1) === -1) {

		console.log('inside the while loop...current placeholder1 is:' + placeholder1)

		placeholder2.push(placeholder1)
		placeholder1 = addSquaresofComponents(num);

		

	}

if (placeholder1 === 1) {

	happyNumbers.concat(placeholder2)
	return 1;
 } else {
 	unhappyNumbers.concat(placeholder2)
 	return 0;

}
}


function isHappyorUnhappy (num) {
	if  (happyNumbers.indexOf(num) > -1) {

	console.log(1)
	return
}  
if (unhappyNumbers.indexOf(num) > -1) {

	console.log (0)
	return
} 
	var answer = looper(num)
	console.log (answer)

}


	

