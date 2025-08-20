/*Raqamlar sonini hisoblash N soni berilgan. Do while orqali raqamlar sonini toping.

input: 987654
output: 6 */

let son = 98785654;
let count = 0;

do{
    count+=1;
    son = Math.floor(son/10);
}while(son)

console.log(count);
