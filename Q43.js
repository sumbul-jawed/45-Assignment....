"use strict";
// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians1 = ["fiza", "nimra", "komal", "ayesha"];
function make_great(names) {
    let greatmagician = [];
    for (let name of names) {
        greatmagician.push("Great" + name);
    }
    return greatmagician;
}
function show_Magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
let greatMagician = make_great(magicians1);
show_Magicians(magicians1);
console.log("Great Magicians:");
show_Magicians(greatMagician);
