/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case -> nums.length == 0
  //progress -> removing items from the front of the array
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
};


/** longest: return the length of the longest word in an array of words. */
array = ["b"];
function longest(words) {
  //base case -> words.length ==0;
  //progress -> removing items from front of words array;
  if (words.length === 0) return 0;
  let wordLength = words[0].length;
  let currentLongest = longest(words.slice(1));
  // if (longest(words.slice(1)) > wordLength) {
  //   wordLength = longest(words.slice(1));
  // }
  if (wordLength < currentLongest) {
    wordLength = currentLongest;
  }
  return wordLength;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, out = "", i = 0) {
  //base case -> i equals string's length
  //progress -> incrementing i by 1
  if (str.length === i) return out;

  if (i % 2 === 0) out += str[i];

  return everyOther(str, out, i + 1);
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  //base case -> arr.length === 0
  //progress -> remove values at front of array

  if (arr.length === 0) return false;

  if (arr[0] === val) {
    return true;
  }

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, palindrome=true) {
  //base case -> str.length === 0
  //progress -> remove letters at front and back of string

  if(str.length === 0) return palindrome;

  if(str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out="", i=str.length - 1) {
  //base case -> i < 0
  //progress ->  decrementing i by 1

  if(i < 0) return out;

  out+= str[i]

  return revString(str, out, i - 1);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
