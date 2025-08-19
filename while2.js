/*Sonni ikkilangan shaklga o‘tkazish N sonini while yordamida ikkilik sanoq sistemasiga o‘tkazing.

input: 13
output: 1101 */
let num = 13;
// let ikkilik = num % 2; 

while(num){
    var ikkilik = String(num%2);
    num = Math.floor(num/2);
    ikkilik += String(num%2);
}
console.log(ikkilik);
