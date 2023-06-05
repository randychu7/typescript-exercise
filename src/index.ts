let sales = 123_452_266;
let numbers: number[] = [];
numbers.forEach(n=>n.toFixed(2));


let course = "TypeScript";
let isPublished = true;
let level;
level = 1;
level = "hi";

function render(document:any){
    console.log(document)
} 

//Tuple
let user: [number, string] = [1, "Steve"];

//Enum list of related values

const enum Size {Small = 1, Medium, Large};

let mySize:Size = Size.Medium;
console.log(mySize);

//Functions

function calculateTax(income:number, taxYear = 2022): number{
    if(taxYear < 2022)
    return income * 1.2;
    return income * 1.4;
    
}

calculateTax(10000, 2023)

