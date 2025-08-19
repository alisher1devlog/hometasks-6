/*Eng katta raqamni topish N soni berilgan. While yordamida uning eng katta raqamini toping.

input: 38527
output: 8 */

let num = 385927;
let max = num%10;

while(num){
    let oxirgi = num % 10;
    if(oxirgi>=max){
        max = oxirgi;
    }
    num = Math.floor(num/10);
}
console.log(max);

