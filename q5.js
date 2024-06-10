// *
// *
// *
// *
// * 



// for(let i = 1; i<=5; i++){
//     console.log("*")
// }

// *****


// let str = ""
// for(let i = 1; i<=5; i++){
//     str = str + "*" // *, **, ***, ****, *****
// }
// console.log(str) // *****



// *****
// *****
// *****


// for(let row = 1; row<=3; row++){
//             let str = ""
//             for(let i = 1; i<=5; i++){
//                 str = str + "*" // *, **, ***, ****, *****
//             }
//             console.log(str) // *****
// }



//  str = ""
// for(let i = 1; i<=5; i++){
//     str = str + "*" // *, **, ***, ****, *****
// }
// console.log(str) // *****


// str = ""
// for(let i = 1; i<=5; i++){
//     str = str + "*" // *, **, ***, ****, *****
// }
// console.log(str) // *****




// *****
// *****
// *****
// *****


// for(let row = 1; row<=4; row++){

//     let str = ""
//     for(let col = 1; col<=5; col++){
//        str = str + "*"
//     }
//     console.log(str) // *****

// }



// *
// ***
// *****
// *******
// *********

let x = 1
for(let row = 1; row<=5; row++){

    let str = ""
    for(let col = 1; col<=x; col++){ // 2*row-1
       str = str + "*"
    }
    console.log(str) // *****

    x = x+2 // 3, 5

}