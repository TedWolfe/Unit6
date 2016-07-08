/* Get two numbers from user.  Display a randomly select number that falls between the two numbers.  */

//  Prompt user for two numeric values.

var nums = prompt("Please two numbers separated by a space character.", "").split(" ");


// Use this for loop to determine low value and high value.
 
for(var i=0; i<nums.length; i++) { nums[i] = +nums[i]; };

var nmax = Math.max.apply(null, nums);
var nmin = Math.min.apply(null, nums);


// Generate a random number using user supplied low and high values as range.

cnum = (Math.random() * (nmax - nmin + 0) + nmin).toFixed(1);


// Display selected number to user.

alert("We chose the number " + cnum + ".  Which is between " + nmin + " and " + nmax + "!");


