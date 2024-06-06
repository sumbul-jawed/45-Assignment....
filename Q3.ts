// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// lower case
let person_Name: string= "sumbul jawed" 
console.log("lower case:", person_Name.toLowerCase());

// upper case
console.log("upper case:", person_Name.toLocaleUpperCase());

// Title case
console.log("Title case:", person_Name.charAt(0).toUpperCase() + person_Name.slice(1));