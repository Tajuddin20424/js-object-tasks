// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// ```
// **Output:**

// <br>

//     4


let student = {
    name: 'Arian Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true,
    
}

let propertyCount = Object.keys(student).length;
console.log(propertyCount);