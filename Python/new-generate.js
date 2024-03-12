function generateString() {
    let result = [];
    for (let i = 1; i <= 100000; i++) {
        if (i % 10 === 8) {
            result.push("SNOWMAN");
        } else {
            result.push(i.toString());
        }
    }
    return result.join("-");
}

// 文字列生成
let generatedString = generateString();

// 88001文字から88030文字までの数字
let targetNumbers = generatedString.substring(88000, 88030);

console.log(targetNumbers);