/*Kvadrat sonlar For yordamida 1 dan N gacha bo‘lgan mukammal kvadrat sonlarni chiqaring.

input: 30
output: 1 4 9 16 25 */


// Uyga vazifalarni prompt orqali kiritmaganman sababi men terminal bilan ishlaganman

const input = 30;

function kv(input){
    for(let i = 0; i <= input; i++){
        if(i*i < input){
            console.log(i*i);
        }else{
            return 0; 
        }
    }
}

kv(input)