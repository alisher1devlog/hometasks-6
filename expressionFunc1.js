/*Parolni tekshirish Funksiya expression sifatida yozilsin. Parol kamida 8 belgidan iborat bo‘lsa "Yaroqli parol", aks holda "Yaroqsiz parol".

input: "abcd1234"
output: "Yaroqli parol" */

const input = "ab cd1234";

function password(input){
    let count = 0; 
    for(let i of input){
        if(i === " "){
            return "Parolda bo'sh jo'y bo'lmasligi kerak";
        }else{
            count+=1;
        }
    }
    if (count>=8) {
        return "Yaroqli parol";
    }else{
        return "Yaroqsiz parol";
    }
}

console.log(password(input));