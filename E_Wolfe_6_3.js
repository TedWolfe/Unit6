/*  Average the total of a set of random numbers.  */

//  Get 8 random numbers.

var nums = [];
for (var i=0, m=8; i<m; i++) {
    nums.push(Math.round(Math.random() * m))
    }

//  Add the 8 random numbers together.

var total=0;
for(var i in nums) { total += nums[i]; };


// Display the sum and average of these numbers.

alert("Eight numbers were generated.  \nThe sum of these numbers is: " + total + ".\nThe average of these numbers is: " + (total / 8) + ".");

