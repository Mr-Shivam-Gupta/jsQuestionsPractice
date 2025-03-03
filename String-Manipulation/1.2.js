
function reverseString(input){
let outputString = '';
console.log(input.length);
 for(let value of input){
    outputString += input[(input.length-1) -outputString.length ]
 }

console.log(outputString);
}

reverseString("Shivam Gupta");