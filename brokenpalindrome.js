/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  if (isPalindrome(str) === true){
    return true;
  }

  for (var i = 0; i < str.length; i++) {
    let newStr = '';
    for (var j = 0; j < str.length-1; j++) {

      if (i === j) {
        newStr += str[j+1];
        newStr += str[j];
      } else {
        newStr += str[j+1];
      }
    }
    if (isPalindrome(newStr) === true){
      return true;
    }
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str){
    return true;
  } else {
    return false;
  }
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
