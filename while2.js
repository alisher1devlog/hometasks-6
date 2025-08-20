/*Sonni ikkilangan shaklga o‘tkazish N sonini while yordamida ikkilik sanoq sistemasiga o‘tkazing.

input: 13
output: 1101 */

// Bu mening yechimim 

// let num = 13;
// let ikkilik = ""; 

// while(num>0){
//     let qoldiq = num%2;
//     ikkilik = qoldiq + ikkilik; 
//     num = Math.floor(num/2);
// }
// let teskari = 0;
// while(ikkilik>0){
//     let qoldiq = ikkilik % 10;
//     teskari = 10 * teskari + qoldiq;
//     ikkilik = Math.floor(ikkilik/10);
// }
// console.log(teskari);

// Ai dan optimal yechim

let num = 13;
let ikkilik = '';

while(num>0){
    let qoldiq = num%2;
    ikkilik = qoldiq+ikkilik;
    num = Math.floor(num/2);
}
console.log(ikkilik);

