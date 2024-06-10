// 1):  

// if else, switch, ternory: 
// shortcircuiting:


// let a , b

// let a = 100 
// let b = 200

// if(a>b){
//     console.log("a is greater")
// }
// else {
//     console.log("b is greater")
// }


//   a>b ? console.log("a is greater") : console.log("b is greater")


// a,b,c => find the biggest of three numbers

//    let a = 100
//     let b = 200
//     let c = 30
//    a>b && a>c ?  console.log("a is the biggest") : 
//                                     ( b>c? console.log("b is the biggest") : console.log("c is the biggest"))



// red => "Please Stop", green "Please Go" , yellow => "Please be Slow" => traffic light


// let color = "green"

// let choice = color 


// switch(choice){

//     case "red"  :  console.log("Please Stop")
//                    break

//     case "green" : console.log("Please Go")
//                      break

//     case "yellow" : console.log("Please be Slow")
//                         break

//     default:  console.log("Invalid color")

// }



// lets take a number and check if it is even or odd using switch

// let n = 100

// let choices =  n%2==0  // true, false

// switch(choices){

//     case true:  console.log("Even")
//                 break
//     case false: console.log("Odd")
//                 break
// }



// lets take 3 numbers and find the biggest number using switch

// let a = 1000
// let b = 2000
// let c = 3000

// let choices =  a>b&& a>c // true or false

// switch(choices){
//      case true: console.log("a is the biggest")
//                  break

//      case false:  
//                  // b, c

//                  let choices1 = b>c // true or false

//                  switch(choices1){
//                     case true: console.log("b is the biggest")
//                                 break
//                     case false: console.log("c is the biggest")
//                  }

//                 //  if(b>c){
//                 //     console.log("b is the biggest")
//                 //  }
//                 //  else{
//                 //     console.log("c is the biggest")
//                 //  }

//                 // b>c? console.log("b is the biggest") : console.log("c is the biggest")
//                 // console.log(b>c? "b is the biggest" : "c is the biggest")
// }



// let a=100;
// let b=200;
// let c=12000;


//  let largest;
//   switch (true) {
//     case true:
//       largest = a;
//       break;
//     case (b >= a && b >= c):
//       largest = b;
//       break;
//     case true:
//       largest = c;
//       break;
//   }
//   console.log(largest);


//  && , || 


// let shop1 = "xyz"
// let shop2 = "chicken masala"
// let shop3 = "onions"

// let ans = shop1=="chicken" && shop2=="chicken masala" && shop3=="onions"

// console.log(ans)


// short circuiting:
//  10<2 && console.log("hellooooooo")


// 10<2 || console.log("hellooooooo")


//  a>b || b > c || c > a 

// a, b,c => find the biggest number  


// a>b&&a>c && console.log("a is the biggest") 

// b>c&&b>a && console.log("b is the biggest")

// c>a&&c>b && console.log("c is the biggest")


// let take a 3 digit number and check if it is a palindrome or not

// 121 => 121 => palindrome
// 675 => 576 => not a palindrome

// reverse => 
// orginal number and the rev number


let n = 125 

let last  =  n %10 
let first = parseInt(n/100) // 1.25 => 1

if(first==last){
    console.log("Palindrome")
}
else{
    console.log("Not a palindrome")
}


// loops: 

// 30 + 30 => 60 questions

// 25 questions

// 10-12


// prime numbers: 