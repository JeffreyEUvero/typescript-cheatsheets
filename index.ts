
// array 
let numbers: number [] = [1,2,3]; 

// tuples
let user: [number, string] = [1, 'Mosh']
// user.push(1) 

// enum 
enum Size {Small = 's', Medium = 'm', Large = 'l'} 
// or 
// enum Size {Small = 1, Medium , Large }

// function 

function calculateTax( income: number ) : number {
    if (income < 50_000)
        return income * 1.2;
    return income * 1.3; 
}


// object 

let employee : {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
}


// alias type

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let emp : Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
}

// union

function kgToLbs (weight: number | string) : number {
    // Narrowing 
    if(typeof weight === 'number'){
        return weight * 2.2; 
    } else{
        return parseInt(weight) * 2.2; 
    }
}

kgToLbs(10); 
kgToLbs('10kg')

// Intersection 

let weight : number & string; 

// Literal types 
type Quantity = 50 | 100; 

let quantity: Quantity = 100; 


// Nullable types 

function greet(name: string | null | undefined){
    if(name)
        console.log(name.toUpperCase()); 
    else 
        console.log('Hola')
}

greet(null); 


// optional Chaining 

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date() }; 
}

let customer = getCustomer(1);
// Optional property access operation 
console.log(customer?.birthday)







