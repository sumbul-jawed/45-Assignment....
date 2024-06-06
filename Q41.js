"use strict";
// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician = ["brad", "Rameez", "Ainak wala"];
function show_magician(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
show_magician(magician);
