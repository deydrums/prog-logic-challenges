/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

6857
*/

const factors = (num, res) => {
    for (let i = 1; i < num; i++) {
        if(num % i == 0){
            if(isprime(i)){
                console.log(i)
            }
        }
    }
}

const isprime = (num) =>{
    
    if(num == 0 || num == 1 || num == 4 )return false

    for (let i = 2; i < num/2; i++) {
        if(num % i == 0) return false;
    }
    return true;
}

console.log(factors(600851475143));
