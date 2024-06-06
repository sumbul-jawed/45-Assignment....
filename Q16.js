"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Sheza", "Faryal", "Uswa", "Yusra", "Fiza"];
console.log("we've found a bigger dinner table!");
// ADD A NEW GUEST TO THE BEGINNING OF THE ARRAY.
guestArr.unshift("jiya");
// ADD A NEW GUEST TO THE MEDDILE OF THE ARRAY.
guestArr.splice(2, 0, "sumbul");
// ADD A NEW GUEST TO THE END OF THE ARRAY.
guestArr.push("hareem");
// PRINT A NEW SET OF INVITATION MESSAGES.
for (let i = 0; i <
    guestArr.length; i++) {
    console.log(`Hello, ${guestArr[i]}! Please come to dinner`);
}
