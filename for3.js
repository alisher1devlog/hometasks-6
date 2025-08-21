/*Karraliklar yig‘indisi N soni berilgan. 1 dan N gacha bo‘lgan sonlardan faqat 3 va 5 ga bo‘linadiganlarini yig‘indisini hisoblang.

input: 15
output: 45  //(3+5+6+9+10+12+15) */

const input = 15;

function sumUp(input){
    let sum = 0;
    for(let i = 1; i < input; i++){
        if(i%3==0 || i%5==0){
            sum+=i;
        }
    }
    return sum;
}

console.log(sumUp(input));