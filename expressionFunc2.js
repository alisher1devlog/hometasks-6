/*Palindrom son Expression function yozing. Agar son teskari yozilganda ham o‘sha son bo‘lsa true, aks holda false.

input: 121
output: true
input: 123
output: false */

const input =  123321;

function palindrom(input){
    let teskari = 0;
    let kaskad = input;
    for(let i = 0; kaskad; i++){
        let oxirgi = kaskad % 10;
        teskari = 10 * teskari + oxirgi; 
        kaskad = Math.floor(kaskad/10);
    }

    if(teskari === input){
        return "Palinfrom!";
    }else{
        return "Palindrom emas!";
    }
}

console.log(palindrom(input));
