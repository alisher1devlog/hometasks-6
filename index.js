// function declaration


// console.log(pow(5));
// function pow(input){
//     return input*input;
// }

// let sum = function sumOfDigit(str){
//     let sum = 0;
//     for(let i of str){
//         if(Number(i)){
//             sum+=Number(i);
//         }
//     }
//     return sum;
// }

// console.log(sum("ad123afd45"));

// (function (str){
//     let sum = 0;
//     for(let i of str){
//         if(Number(i)){
//             sum+=Number(i);
//         }
//     }
//     return sum;
// })("ad123afd45");

// let greet = str =>{
//     let sum = 0;
//     for(let i of str){
//         if(Number(i)){
//             sum+=Number(i);
//         }
//     }
//     return sum;
// };

// console.log(greet("ad123afd45"));


// let add = (son1,son2) => son1+son2;

// console.log(add(1,2));
// xatolik!
// function salom(malos){
//     let teskari = ""
//     for(let i = 0; i < malos.length; i++){
//         console.log(i);
//     }
// }

// salom("alisher");

function processUserInput(callBack){
    let name = prompt("Please enter your name:");
    callBack(name)
}

processUserInput(function (name) {
    console.log("Hello " + name);
});