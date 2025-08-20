/*Raqamlar yig‘indisi juft/toqligini aniqlash N soni berilgan. Raqamlar yig‘indisi juft bo‘lsa "Juft", aks holda "Toq" chiqaring.

input: 456
output: Juft  (4+5+6=15 → Toq) */

let num = 4516;
let sum = 0;
do {
    let qoldiq = num % 10;
    sum += qoldiq;
    num = Math.floor(num/10);
} while(num>0);

if(sum%2){
    console.log("Toq");
}else{
    console.log("Juft");   
}

