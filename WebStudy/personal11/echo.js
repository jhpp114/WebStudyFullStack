function echo(str, nums) {
    for(let i = 0; i < nums; i++) {
        console.log(`${str}`);
    }
}

function average(scores) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    sum = sum / scores.length;
    sum = Math.round(sum);
    return sum;
}

echo("echo!!!", 10);
echo("Tater Ttos", 3);

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));