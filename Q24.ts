// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let car: string = "subaru";
let age: number = 26;
let numbers: number[] = [1,2,3,4,];


// string test

// Test 1: equality (true).

console.log("Is car == `subaru`? I predict true.")
console.log(car == 'subaru')
// true

// Test 2: strict equality  (false).

console.log("Is car === `subaru`? I predict false.")
console.log(car === 'subaru')
// false

// Test 3: Inequality (true).

console.log("Is car != `subaru`? I predict true.")
console.log(car != 'subaru')
// true


// Test 4: Inequality (false).

console.log("Is car !== `subaru`? I predict false.")
console.log(car !== 'subaru')
// false

// Lower function test.

// Test 5: LowerCase conversion (true).

console.log("Is car.toLowerCase() == `subaru`? I predict true.")
console.log(car.toLocaleLowerCase() == 'subaru')
// true


// Test 6: LowerCase conversion (false).

console.log("Is car === car.toLowerCase()? == I predict false.")
console.log(car === car.toLocaleLowerCase());
// false

// Numerical test.

// Test 7: Equality (true)
console.log("Is age == 25? I predict True.")
console.log(age == 25);
// true

// Test 8: Inequality (false)
console.log("Is age != 30? I predict True.")
console.log(age != 30);
// true

// Test 9: Greater Than (false)
console.log("Is age > 30? I predict false.")
console.log(age > 30);
// false

// Test 10: Less Than (true)
console.log("Is age <= 25? I predict True.")
console.log(age <= 25);
// true

// **Logical operators**

// Test 11: AND (true)
console.log("Is age > 20 && age < 30? I predict True.")
console.log(age > 20 && age < 30);
// true


// Test 12: OR (false)
console.log("Is age > 30 || age < 18? I predict false.")
console.log(age > 30 || age < 18);
// false

// Array Test.

// Test 13: In array (true)
console.log("Is 3 in number? I predict True.");
console.log(3 in numbers);
// true

// Test 13: Not in array (false)
console.log("Is 5 not in number? I predict false.");
console.log(5 in numbers);
// true












