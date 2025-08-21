/*Pascal uchburchagi Nested for yordamida N qatorlik Pascal uchburchagini chiqaring.

input: 5
output:
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1*/

// Uyga vazifalarni prompt orqali kiritmaganman sababi men terminal bilan ishlaganman

const input = 5;

function pascal(input) {
    let triangle = [];

    for (let i = 0; i < input; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1; 
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }
    for (let i = 0; i < triangle.length; i++) {
        console.log(triangle[i].join(" "));
    }
}

pascal(input);


