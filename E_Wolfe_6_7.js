/* Count the number of zeros in a set of values supplied by user.  */

// Prompt user for set of values, split string into an array.

a = prompt("Enter a set of numeric values separated by a space.  Remember to include some 0 characters and I will count how many.", "").split(" ");


// Check for the digit 0, remember that the string 0 is != to numeric 0.
 
var numberOfZeros = 0;
for (var i = 0, n = a.length; i < n; i += 1) {
    if (parseInt(a[i]) === 0) {
        numberOfZeros += 1;
    }
}


// Display number of zeros.

alert("Number of zeros = " + numberOfZeros + ".");

