function combine(input1, input2, resultConversion) {
    console.log(typeof input1);
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //throw new Error("Incorrect input!");
    //return ("not possible");
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
    console.log("Ergebnis " + result);
    return result;
}
var resultOfCombine = combine(4, 7, "as-number");
console.log("Result " + resultOfCombine);
var resultOfCombineAge = combine("32", "37", "as-number");
console.log("Result " + resultOfCombineAge);
var combinedNames = combine('Max', 'Anna', "as-text");
console.log(combinedNames);
var resultOfCombineTest = combine("Text", "37", "as-number");
console.log("Result " + resultOfCombineTest);
//# sourceMappingURL=union-aliases.js.map