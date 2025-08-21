/*Sonni raqamlari yig‘indisi bo‘yicha baholash Funksiya son qabul qiladi. Agar raqamlar yig‘indisi 10 dan kichik bo‘lsa "kichik", 10–20 oralig‘ida bo‘lsa "o‘rtacha", 20 dan katta bo‘lsa "katta".

input: checkDigitSum(583)
output: "katta" */


function checkDigitSum(input){
    if(input<10){
        console.log("kichik");
    }else if(input>=10 && input<20){
        console.log("O'rtacha");
    }else{
        console.log("katta");
    }
}

checkDigitSum(583);
