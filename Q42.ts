// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function make_great1(magicians: string[]): string[] {
    return magicians.map(magicians => `The Great ${magicians}`);
}

let magicians: string[] = [`shazia`, `fiza`, `angel`];

let greatmagician : string[] = make_great1(magicians);

console.log(greatmagician);