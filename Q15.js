"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guest = ["Mehak", "Malaika", "Nimra", "Faryal", "Huzaifa"];
let canNotAttend = "Malaika";
console.log(canNotAttend + ' ' + "Can not make it, for Dinner");
let newGuest = "Sheza";
guest[guest.indexOf(canNotAttend)] = newGuest;
console.log(guest);
