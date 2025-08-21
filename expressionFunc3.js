/*Sonlarning o‘rtacha qiymatini hisoblash Expression function massiv qabul qiladi va o‘rtachasini qaytaradi.

input: [10, 20, 30, 40]
output: 25 */

const input = [10, 20, 30, 40];

function avarage(input){
    let sum = 0;
    let count = 0;
    for(let i of input){
        sum +=i;
        count++;
    }
    console.log(sum/count);
}

avarage(input);