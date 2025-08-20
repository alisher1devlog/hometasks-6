/*Tub sonlarni chiqarish N soni berilgan. While yordamida 1 dan N gacha bo‘lgan tub sonlarni ekranga chiqaring.

input: 20
output: 2 3 5 7 11 13 17 19 */
// mening yechimim
// let num = 20;
// let tubSonlar = [];
// while(num){
//     let count = 0;
//     for(let i = 1; i <= num; i++){
//         if(num%i===0){
//             count+=1;
//         }
//     }
//     if(count===2){
//         tubSonlar.push(num);
//     }
//     num-=1;
// }
// console.log(tubSonlar);

// AI dan optimal yechim

let num = 20;
let son = 2;
let tubSonlar = [];

while(son<=num){
    let tub = true;

    let i = 2;
    while(i*i<=son){
        if (son%2===0){
            tub = false;
            break;
        }
        i++;
    }
    if(tub){
        tubSonlar.push(son);
    }
    son++;
}
console.log(tubSonlar.join(" "));

