// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guestArr1: string[] = ["Sheza", "Faryal", "Uswa", "Yusra", "Fiza"]

console.log("Unfortunately, I can Invite only two people for dinner.");

// REMOVE GUEST FROM THE LIST UNTIL ONLY TWO NAMES REMAIN.

while (guestArr1.length > 2) {
    let removedGuest = guestArr1.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// PRINT A MESSAGE TO EACH OF THE TWO PEOPLE STILL ON THE LIST.

for (let i = 0; i < 
    guestArr1.length; i++) {
        console.log(`Hello, ${guestArr1[i]}! Yor're still invited to dinner.`);
    }
        // REMOVE THE LAST TWO NAMES FROM THE LIST.

guestArr1.pop();
guestArr1.pop();

// PRINT THE EMPTY LIST.

console.log(guestArr1);
        