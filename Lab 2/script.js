/*
 2 pts) 1. Staircase: write a function that takes in an integer n and prints out a staircase to the console like this (for n=4):
 
 It should be able to handle any n up to 50. If n is greater than 50, the function should print the string "Not available".
 */

console.log("#1");
function staircase(n) {
  
  if (n > 50) {
    console.log("Not available.");
    throw new Error("Not available. Your integer n is greater than 50.");
  }
  
  if (n == 1) {
    console.log(' '.repeat(n) + '#');
  }
  else {
    //noinspection JSDuplicatedDeclaration
    for (var i = 0; i <= n; i++) {
      console.log(' '.repeat(n - i) + "#" + ':'.repeat(i));
    }
  }
}

staircase(3);

/*
 3 pts) 2. Read the following on arrays http://www.w3schools.com/js/js_arrays.asp. Write a function that takes an array of  integers, and a positive integer, n. The function finds the number of  pairs (i,j) in the array where i < j and  i + j  is evenly divisible by n. Call the function with a sample array and n, and console.log the result. Note: brute force is ok.
 
 Sample Input
 
 n = 3
 [1, 3, 2, 6, 1, 2]
 Sample Output 5
 */

console.log("\n#2\n ");
function divide(n) {
  
  var array = [1, 3, 2, 6, 1, 2];
  var result = 0;
  
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (i != j) {
        var sum = (array[i] + array[j]);
        if (array[i] < array[j] && (sum % n == 0)) {
          result += 1;
        }
        
      }
    }
  }
  console.log(result);
}
divide(3);

/*
 3 pts) 3. Given an array a and an int n, find all pairs in the array that add up to n (you don't need to report the pairs). Return this number. Brute force is acceptable, but for 2 pts extra credit, come up with an algorithm that finds this in O(n). For the extra credit, explain, in your own words, why it works.
 */

console.log("\n#3\n");
function pairs(n) {
  
  var array = [1, 3, 2, 6, 1, 2];
  var counter = 0;
  
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      var sum = (array[i] + array[j]);
      if (sum == n) {
        counter++;
      }
    }
  }
  console.log(counter);
}

pairs(3);

/*
 3 pts) 4. Landscape Plus: create a landscape function as we did in class except that it has lakes (~~~~), mountains (/'''\), deserts (****), forests (YYYYYYY), and fences (XXXXXX). Your landscape function should take in these parameters: function(lakeSize, mountainSize, desertSize, forestSize, and fenceSize). The inner functions (see slides) should take the appropriate parameters passed into the main function. These functions should be called within the main function to produce the result string. The function should return this string. Make up some parameters in your script, call the function with them, and print the string to console separately.
 */

// Write all this in a script. Turn that script in here (you don't need to submit an html page, though you may want to make a simple one for testing).