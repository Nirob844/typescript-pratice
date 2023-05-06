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

function filterProducts<T extends keyof Product>(products: Product[], criterion: T, value: Product[T]): Product[] {
    return products.filter(product => product[criterion] === value);
}

const filteredProducts = filterProducts(products, "category", "Category 1");

console.log(filteredProducts);