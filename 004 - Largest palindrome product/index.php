<!-- /* 
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

Answer:  906609

*/ -->

<?php

function isPalindrome($n){
    $rev = strrev(trim(strval($n)));
    return $n ==  $rev;
}

var_dump(isPalindrome(201));
