/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const strLower = str.toLowerCase();
  let count = 0;
  const vowels = 'aeiou';
  for (let i = 0; i < strLower.length; i++) {
    if (vowels.includes(strLower[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
