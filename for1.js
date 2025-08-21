/*Armstrong sonlarini topish 1 dan N gacha bo‘lgan Armstrong sonlarni for orqali toping. (Armstrong son — raqamlarining kubi yig‘indisi o‘ziga teng, masalan: 153 = 1³+5³+3³).

input: 500
output: 153, 370, 371, 407 */

// Uyga vazifalarni prompt orqali kiritmaganman sababi men terminal bilan ishlaganman


const input = 200000000;

function armstrong(input){
    
    for(let i = 1; i < input; i++){
        let kaskad = i;
        let kub = 0;
        while(kaskad){
            let oxirgi = kaskad % 10;
            kub += oxirgi ** 3;
            kaskad = Math.floor(kaskad/10);
        }
        if(kub === i){
            console.log(i);
        }
    }
}

armstrong(input);