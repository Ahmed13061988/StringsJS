"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const airline = "Tap Air Portugal";
const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(Number(plane[2]));

// console.log("B737"[0]);

// console.log(airline.length);

// console.log("Ahmed".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));

// console.log(airline.indexOf("Portugal"));

// console.log(airline.slice(4, 7));
// const str = airline.slice(4, 7);
// console.log(str.length);

// console.log("Ahmed".slice(2));

// console.log(airline.slice(0, airline.indexOf(" ")));

// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2)); //"al"

// console.log("Ahmed".slice(-3)); // ==> med

//console.log("Ahmed".slice(1, -1)); // ==> hme

const checkMidSeat = function (seat) {
  //b and e are middle seat
  if (seat.slice(-1) === "b" || seat.slice(-1) === "e") {
    console.log("You got the middle seat");
  } else {
    console.log("You got window or aile seat");
  }
};
//checkMidSeat("11g");

const check = function (x) {
  x.slice(-1) === "b" || x.slice(-1) === "e"
    ? console.log("You got the middle seat")
    : console.log("You didn't get the middle seat");
};

//check("11a");

// console.log(airline.toLocaleLowerCase());

// console.log(airline.toUpperCase());

const passenger = "aHmED";

let correct =
  passenger.slice(0, 1).toUpperCase() + passenger.slice(1).toLocaleLowerCase();

console.log(correct);

function capitalizedName(name) {
  console.log(
    name.slice(0, 1).toUpperCase() + name.slice(1).toLocaleLowerCase()
  );
}

//Compairing emails
const email = "hello@ahmed.io";
const loginEmail = "  Hello@Ahmed.Io \n";
const lowerEmail = loginEmail.toLocaleLowerCase();
const trimEmail = lowerEmail.trim(); // trim will remove all spaces before and after the string
console.log(trimEmail);
