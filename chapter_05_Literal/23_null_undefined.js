// ============================================
// null vs undefined in JavaScript
// ============================================

/*
  SIMPLE EXPLANATION:
  -------------------
  
  | undefined                                      | null                                              |
  |------------------------------------------------|---------------------------------------------------|
  | Means "value is missing" (not assigned yet)    | Means "value is empty" (assigned by developer)    |
  | JavaScript gives this automatically            | Developer gives this intentionally                |
  | Type is "undefined"                            | Type is "object" (this is a known JS bug/quirk)  |
  | Example: variable declared but not assigned    | Example: variable intentionally cleared/empty     |

*/

// -------------------------------
// 1. undefined - JS gives this
// -------------------------------

let name;
console.log("Value:", name);           // undefined
console.log("Type:", typeof name);     // "undefined"
// Why? Because we declared 'name' but never put a value in it.

function greet() {
    // no return statement
}
let result = greet();
console.log("Function with no return:", result);  // undefined

let person = {};
console.log("Missing property:", person.age);   // undefined


// -------------------------------
// 2. null - Developer gives this
// -------------------------------

let phone = "iPhone";
phone = null;                          // developer says "no phone now"
console.log("Value:", phone);           // null
console.log("Type:", typeof phone);    // "object" (this is a JS quirk!)

let car = null;                        // developer knows there is no car yet
console.log("Car:", car);              // null


// -------------------------------
// 3. Quick Comparison
// -------------------------------

console.log("\n--- Comparison ---");
console.log("undefined == null  :", undefined == null);    // true  (loose check - both are "empty")
console.log("undefined === null :", undefined === null);   // false (strict check - different types)


// -------------------------------
// 4. Memory Analogy
// -------------------------------

/*
  Think of a box:
  
  undefined = The box exists but you haven't put anything inside yet.
              JS creates the box but leaves it empty.
  
  null      = You looked inside the box, took everything out, 
              and put a label saying "EMPTY".
              You intentionally made it empty.
*/


// -------------------------------
// 5. When to use what?
// -------------------------------

/*
  Use undefined:  Usually you don't need to assign this yourself.
                  JS handles it.
  
  Use null:       When you WANT to say "this has no value on purpose".
                  Example: resetting a variable, clearing an object reference.
*/

let user = { name: "Shan" };
user = null;   // "I had a user, now I don't"

let score;     // "I will have a score later, but not now"
