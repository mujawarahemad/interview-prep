//write a program to check the given number is prime number or not in javascript

let number = 123
let isPrime = true;

if (number < 2) {

    isPrime = false;

} else {

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

}

console.log(`${number} is Prime : `, isPrime);


//Comments ---> 

/*A prime number is a number that has exactly two positive factors: 1 and itself.

2 → factors: 1, 2 → ✅ Prime
3 → factors: 1, 3 → ✅ Prime
5 → factors: 1, 5 → ✅ Prime
1 → factors: 1 only → ❌ Not prime
0 → ❌ Not prime
Negative numbers → ❌ Not prime
*/