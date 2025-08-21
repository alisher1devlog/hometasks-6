/*Satr uzunligini tekshirish Funksiya satr qabul qiladi. Agar uzunligi juft bo‘lsa "Juft uzunlik", toq bo‘lsa "Toq uzunlik" qaytaradi.

input: checkStringLength("hello")
output: "Toq uzunlik" */

const input = "helloalisher";

function srtLength(input){
    // const uzunlik = input.length;
    if(input.length % 2){
        console.log("Toq")
    }else{
        console.log("Juft");    
    }
}

srtLength(input);