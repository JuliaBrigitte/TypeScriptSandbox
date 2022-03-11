console.log("Your Code goes here ....");

//Core Types
//number
//string
//boolean
//object

function add(n1: number,n2: number, showResult: boolean, resultPhrase: string) : any
{
    console.log(typeof number1);
    if (typeof n1 === "number" && typeof n2 === "number")
    {
        if (showResult)
        {
            const result=n1+n2;
            console.log("Ergebnis ");
            console.log(resultPhrase+result);
        }
        else
        {
            return result;
        }
    }
    throw new Error("Incorrect input!");
    return ("not possible");

}

let number :number;
const number1=5;
let number2=2.8;
const printResult=true;
const resultPhrase="Result is: ";

const result=add(number1,+number2,printResult,resultPhrase);
console.log(result)