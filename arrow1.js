/*Raqamlarni ko‘paytmasini topish Arrow function yozing. Son beriladi, uning raqamlari ko‘paytmasini qaytarsin.

input: 234
output: 24   // 2*3*4 */

const kopaytma = (num) => {
    let result = 1;
    while (num > 0) {
        let oxirgi = num % 10;
        result *= oxirgi;
        num = Math.floor(num / 10);
    }
    return result;
};

console.log(kopaytma(234));
