/*Ko‘paytirish jadvali Nested for yordamida 1 dan 10 gacha ko‘paytirish jadvalini chiqarish.

2 x 1 = 2
2 x 2 = 4 */

// Uyga vazifalarni prompt orqali kiritmaganman sababi men terminal bilan ishlaganman


const kopaytuvchi = 10;
const kopaytma = 2;

function kop(kopaytma, kopaytuvchi){
    for(let i = 1; i <= kopaytma; i++){
        for(let  j = 1; j <= kopaytuvchi; j++){
            console.log(`${i} * ${j} = ${i*j}`);
        }
        console.log("\n");
    }
}

kop(kopaytma,kopaytuvchi);
