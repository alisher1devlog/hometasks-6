/*Eng katta raqamni topish N soni berilgan. While yordamida uning eng katta raqamini toping.

input: 38527
output: 8 */

let num = 38527;
let max = num%10;

while(num>0){
    let oxirgi = num % 10;
    if(oxirgi>max){
        max = oxirgi;
        if (max === 9) break;
    }
    num = Math.floor(num/10);
}
console.log(max);

