/*Fibonachchi ketma-ketligi Do while orqali N gacha bo‘lgan Fibonachchi sonlarini chiqarish.

input: 10
output: 0 1 1 2 3 5 8 */


function fib(son){
    if(son<=2 && son>0){
        return 1;
    }else if(son==0){
        return 0;
    }
    return fib(son-1) + fib(son-2);
    
}
let son = 9; 

let i = 0;
do {
    console.log(fib(i));
    i++;
} while (i <= son);



// misoldi ma'nosini tushunish uchun qo'shimcha o'zim uchun
// function factarial(n){
//     if(n === 0){
//         return 1;
//     }
//     // console.log( n * factarial(n-1));
//     return n * factarial(n-1);

// }

// console.log(factarial(5));

