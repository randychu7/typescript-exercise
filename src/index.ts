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

//Objects

//type Alias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date)=> void
}


let employee:Employee = {
    id: 1, 
    name: 'Randy',
    retire: (date:Date)=> console.log(date)

};

function kgToLbs(weight: number | string): number{
    //Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(100);

//Intersection Types
type Draggable = {
    drag: ()=> void;
}

type Resizable = {
    resize: ()=> void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () =>{},
    resize: () =>{}
}

//Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100

function greet(name: string | null | undefined) {
    if(name)
    console.log(name.toUpperCase());
    else 
    console.log("Hola")
}

greet(null)

// option chaining

type Customer = {
    birthday?: Date;
}

function getCusomer(id:number): Customer | null {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCusomer(0);
//Optional property

console.log(customer?.birthday?.getFullYear())

//Optional element access operator
