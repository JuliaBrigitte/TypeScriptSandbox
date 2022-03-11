type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: number | string,
                 input2: Combinable,
                 resultConversion: 'as-number' | 'as-text')
{
    console.log(typeof input1);
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number')
    {
        result=+input1+ +input2;
    }
    else
    {
        result=input1.toString()  + input2.toString();
    }
    //throw new Error("Incorrect input!");
    //return ("not possible");
    if (resultConversion === "as-number")
    {
        return +result;
    }
    else
    {
        return result.toString();
    }
    console.log("Ergebnis " + result);

    return result;
}

const resultOfCombine=combine(4,7, "as-number");
console.log("Result " + resultOfCombine);

const resultOfCombineAge=combine("32","37", "as-number");
console.log("Result " + resultOfCombineAge);

const combinedNames = combine('Max', 'Anna', "as-text");
console.log(combinedNames);

const resultOfCombineTest=combine("Text","37", "as-number");
console.log("Result " + resultOfCombineTest);