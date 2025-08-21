/*Eng katta uch sonni topish Funksiya uchta son qabul qiladi va ulardan eng kattasini qaytaradi.

input: findMaxOfThree(12, 45, 30)
output: 45 */


function findMaxOfThree(num1,num2,num3){
    let max = num1;
    if(num2>max){
        max = num2;
    }
    if(num3>max){
        max = num3;
    }
    return max;
}

console.log(findMaxOfThree(12, 45, 30));
