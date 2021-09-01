/* 
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

Answer:  906609

*/

const isPalindrome = (n) =>{
    let rev = Number(String(n).split('').reverse().join(''));
    return n == rev;
}

console.log(isPalindrome(203));
