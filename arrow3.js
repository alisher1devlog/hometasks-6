/*Eng uzun so‘z Arrow function yozing. Satr qabul qiladi va ichidagi eng uzun so‘zni qaytaradi.

input: "Men JavaScriptni o‘rganayapman"
output: "JavaScriptni" */

const engUzunSoz = (str) => {
    return str.split(" ").reduce((uzun, soz) => 
        soz.length > uzun.length ? soz : uzun
    , "");
};

console.log(engUzunSoz("Men JavaScriptni o'rganayapman")); 

