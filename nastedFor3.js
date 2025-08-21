const input  = 5;

function yulduz(input){
    for (let i = 1; i <= input; i++) {
        let qator = "";
        for (let j = 0; j < i; j++) {
            qator += "*";
        }
        console.log(qator);
    }
}

yulduz(input);
