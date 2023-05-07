const course: string = "next level web development";
//console.log(course);


//run code command
//  npx ts-node-dev --respawn src/index.ts


/*
Convert the following JavaScript array into a TypeScript tuple
const userInfo = [101, "Ema", "John", true,  , "2023"];
*/

const userInfo: [number, string, string, boolean, undefined, string] = [101, "Ema", "John", true, , "2023"];

/*
Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
*/

const arr1: number[] = [1, 2, 3, 4, 5]
const arr2: number[] = [2, 4, 6, 8]

const compareArray = (param1: Number[], param2: number[]) => {
    // const result = [];
    // for (let i = 0; i < arr1.length; i++) {
    //     if (arr2.includes(arr1[i])) {
    //         result.push(arr1[i]);
    //     }
    // }
    const result = arr1.filter(element => arr2.includes(element));
    return result;

}
compareArray(arr1, arr2);

/*
You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
*/
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: 1, name: "Product A", price: 10, category: "Category 1" },
    { id: 2, name: "Product B", price: 20, category: "Category 2" },
    { id: 3, name: "Product C", price: 30, category: "Category 1" },
    { id: 4, name: "Product D", price: 40, category: "Category 2" },
];

function filterProducts<T extends keyof Product>(products: Product[], criterion: T, value: Product[T]) {
    return products.filter(product => product[criterion] === value);
}

const filteredProducts = filterProducts(products, "category", "Category 1");

//console.log(filteredProducts);


/*
Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
*/

type Product1 = [string, number, number];
type ProductList = Product1[];

function calculateTotalCost(products: ProductList): number {
    return products.reduce((total, [_, price, quantity]) => total + price * quantity, 0);
}
const products1: ProductList = [
    ["Product A", 10.0, 2],
    ["Product B", 5.0, 4],
    ["Product C", 2.5, 3],
];

const totalCost: number = calculateTotalCost(products1);

//console.log(`The total cost of all products is: ${totalCost}`);


/*
Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
*/

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers: number[] = numbers.filter(num => num % 2 === 0);

const sumOfEvenNumbers: number = evenNumbers.reduce((acc, curr) => acc + curr, 0);

//console.log(sumOfEvenNumbers); // Output: 30

/*
Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
*/

interface Person {
    name: string;
    age: number;
    email: string;
}

const persons: Person[] = [
    {
        name: "Alice",
        age: 25,
        email: "alice@example.com",
    },
    {
        name: "Bob",
        age: 30,
        email: "bob@example.com",
    },
    {
        name: "Charlie",
        age: 35,
        email: "charlie@example.com",
    },
];


function findPersonByEmail(persons: Person[], email: string): Person | null {
    const result = persons.find((person) => person.email === email);
    return result ? result : null;
}

const emailToFind = "bob@example.com";
const person = findPersonByEmail(persons, emailToFind);

if (person) {
    // console.log(`Found person with email ${emailToFind}: ${person.name}, ${person.age}`);
} else {
    //console.log(`No person found with email ${emailToFind}`);
}


/*
Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
*/

function findMinMax(...nums: number[]): [number, number] {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return [min, max];
}

const nums = [5, 3, 8, 1, 9, 2];
const [min, max] = findMinMax(...nums);

console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);

/*
Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.
*/

function logColor(color: "red" | "green" | "blue", toUpperCase?: boolean): void {
    if (toUpperCase) {
        console.log(color.toUpperCase());
    } else {
        console.log(color.toLowerCase());
    }
}

logColor("red");            // logs "red"
logColor("green", true);    // logs "GREEN"
logColor("blue", false);    // logs "blue"
