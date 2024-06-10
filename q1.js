// Q1: 
// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 40
// Output:
// 40

let a = 10
let b = 20

// 678374784
let mul = 1
let flag = false
for(let i = a; i<=b; i++){
    
    // check even:

    // second last digit : 

    let last2digits = i%100  // 84

    let secondLastDigit =  parseInt(last2digits/10)  // 8.4 => 8

    if(i%2 == 0 && secondLastDigit == 4){
        // console.log(i)
        mul = mul*i
        flag = true
    }
}

if(flag == false){
     console.log(0)
}
else{
console.log(mul)
}