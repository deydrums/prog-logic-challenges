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

const xyz = () => {

    let answer = 0;
    let x = 0;
    let y = 0;

    for (let i = 100; i <= 999; i++) {
        for (let j = i; j <= 999; j++) {
            number = i * j;
            if(isPalindrome(number) && number > answer){
                answer = parseInt(number);
                x = i,
                y = j;
            }
        }
    }

    return(x*y);

}

console.log(xyz());
;