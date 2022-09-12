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
const lowerEmail = loginEmail.toLocaleLowerCase().trim();
//const trimEmail = lowerEmail.trim(); // trim will remove all spaces before and after the string
console.log(lowerEmail);

function checkCorrect(correctEmail, checkingEmail) {
  correctEmail === checkingEmail
    ? console.log(`It's correct`)
    : console.log(`It's not correct`);
}

//checkCorrect(email, lowerEmail);

//Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace(",", ".").replace("£", "$");

console.log(priceUS);
const announcment = "All passenger pla come to dore 23. dore 23!";

const correctAnnouncment = announcment
  .replace("pla", "please")
  .replaceAll("dore", "gate") // or replace(/door/g, "Gate"); this is before replaceAll method.
  .replace(".", "!");

console.log(correctAnnouncment);

const plane1 = "A320neo";
console.log(plane1.includes("A")); // true
console.log(plane1.startsWith("B")); // false
console.log(plane1.startsWith("A32")); // true
console.log(plane1.endsWith("o")); // true
console.log(plane1.endsWith("O")); // ==> false because of case sensetive

const plane2 = "Airbus A320neo";

if (plane2.startsWith("Air") && plane2.endsWith("neo"))
  console.log("This airplane is Airbus A320neo");
else console.log("This is not Airbus A320neo");

const checkBaggage = function (items) {
  items.toLowerCase().includes("knife") || items.toLowerCase().includes("gun")
    ? console.log("You're not allowed on the airplane")
    : console.log("You're allowed on the airplane, have a safe flight");
};

// checkBaggage("I have Laptop, some Food and pocket Knife");
// checkBaggage("I have a gUn");
// checkBaggage("I have laptop, phone and fOOd");

//split() and join()
console.log("a+very+nice+string".split("+"));
console.log("Ahmed Hussein".split(" "));

const [firstName, lastName] = "Ahmed Hussein".split(" ");
console.log(firstName, lastName);
console.log("Ahmed & Atyaf".split("&"));

const arr = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(arr);

const capitalized = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    let m = n.toLowerCase();
    namesUpper.push(m.slice(0, 1).toUpperCase() + m.slice(1));
  }
  console.log(namesUpper.join(" "));
};

capitalized("jessica aNn smiTH davis uBaIdi");

//Padding

const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("Ahmed".padStart(30, "Great"));

const maskCreditCard = function (number) {
  const str = String(number);
  // const str = number + " "; this will convert into string
  return str.slice(-4).padStart(str.length, "*");
};

console.log(maskCreditCard(4342456778823412));
console.log(maskCreditCard("1234342355354343141"));
console.log(maskCreditCard(BigInt(98678990789067856)));
console.log(maskCreditCard(BigInt(35463462346565254325342534253)));

//Repeat method

const message2 = "Bad weather... All Departues Delayed";

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)} `);
};

planesInLine(5);
