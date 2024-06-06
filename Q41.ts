// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magician: string[] = ["brad", "Rameez", "Ainak wala"];

function show_magician(magician: string[]) {
    magician.forEach(function(magician) {
        console.log(magician);
    });
}

show_magician(magician);

