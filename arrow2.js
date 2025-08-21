/*Perfect Number Arrow function yozing. Agar son mukammal son bo‘lsa true, aks holda false. Mukammal son — o‘zidan tashqari bo‘luvchilari yig‘indisi o‘ziga teng bo‘lgan son. (Masalan: 6, 28).

input: 28
output: true */

const perfectNumber = (num) => {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
};

console.log(perfectNumber(6));
