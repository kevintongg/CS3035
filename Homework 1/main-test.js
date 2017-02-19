let map = [
  // 0,0 0,1 0,2 0,3 0,4 0,5 0,6 0,7
  ["wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall"],

  // 1,0 1,1 1,2 1,3 1,4 1,5 1,6 1,7
  ["wall",
    "prize",
    "monster",
    "blank",
    "blank",
    "blank",
    "prize",
    "wall"],

  // 2,0 2,1 2,2 2,3 2,4 2,5 2,6 2,7
  ["wall",
    "blank",
    "blank",
    "blank",
    "blank",
    "blank",
    "blank",
    "wall"],

  // 3,0 3,1 3,2 3,3 3,4 3,5 3,6 3,7
  ["wall",
    "blank",
    "blank",
    "prize",
    "blank",
    "blank",
    "blank",
    "wall"],

  // 4,0 4,1 4,2 4,3 4,4 4,5 4,6 4,7
  ["wall",
    "blank",
    "blank",
    "blank",
    "blank",
    "blank",
    "monster",
    "wall"],

  // 5,0 5,1 5,2 5,3 5,4 5,5 5,6 5,7
  ["wall",
    "blank",
    "blank",
    "monster",
    "blank",
    "blank",
    "blank",
    "wall"],

  // 6,0 6,1 6,2 6,3 6,4 6,5 6,6 6,7
  ["wall",
    "prize",
    "blank",
    "blank",
    "starting space",
    "blank",
    "blank",
    "wall"],

  // 7,0 7,1 7,2 7,3 7,4 7,5 7,6 7,7
  ["wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall"]
];

// 4,6 monster
// 5,3 monster
// 1,2 monster
// 3,3 prize
// 6,1 prize
// 1,6 prize
// 1,1 prize

let monsters = ["Kel'thuzad", // 0
  "Kael'thas Sunstrider", // 1
  "Arthas Menethil", // 2
  "Deathwing", // 3
  "Garrosh Hellscream", // 4
  "Archimonde", // 5
  "Gul'dan"]; // 6
let prizes = ["Black Ice (Polearm)", // 0
  "Excalibur (Sword)", // 1
  "Sword of a Thousand Truths (Sword)", // 2
  "Lambent Light (Rapier)", // 3
  "Elucidator (Sword)", // 4
  "Dark Repulser (Sword)", // 5
  "Titanium Exoskeleton (Armor)", // 6
  "Purple Floppyslapper (Bludgeon)"]; // 7
let info = ["You see something bright. Ooh! Shiny!", // 0
  "You see a treasure chest. To your surprise, this is the item you have been wanting all your life!", // 1
  "You find an item that could really save your life when you really need it.", // 2
  "You find an interesting item. Hrm. Quite.", // 3
  "You find an item you always wished was real from your video games!", // 4
  "You find an exotic item. Could be one of a kind."]; // 5
let playerHealth = 23;
let x = 6;
let y = 4;
let activeGame = true;


function Adventurer(health, prizeCounter, prizes, xCoordinate, yCoordinate) {
  this.health = health;
  this.prizeCounter = prizeCounter;
  this.prizes = prizes;
  // Initially starting at 6, 4
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
}

function Monster(name, health, prize) {
  this.name = name;
  this.health = health;
  this.prize = prize;
}

let adventurer = new Adventurer(playerHealth, 0, [], x, y);

let monster1 = new Monster(randomElement(monsters), randomHealth(10, 15), randomElement(prizes));


console.log(adventurer.position);

function randomHealth(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomElement(array) {
  return array[Math.floor((Math.random() * array.length))];
}

function playerDamageCalculator() {
  return Math.floor((Math.random() * 4) + 1);
}

function monsterDamageCalculator() {
  return Math.floor((Math.random() * 5) + 1);
}

function introduction() {
  alert("Welcome!");
  alert("This is a text based game where you must either find the goal with two prizes in hand in order to win or die. Whichever comes first.");
  alert("Let us proceed.");
}

function clearInfo() {
  document.getElementById("health").innerHTML = "";
  document.getElementById("prizeCounter").innerHTML = "";
  document.getElementById("prizes").innerHTML = "";
  document.getElementById("location").innerHTML = "";
  document.getElementById("info").innerHTML = "";
}

function outcome() {
  if ((adventurer.xCoordinate == 3 && adventurer.yCoordinate == 3) && map[adventurer.xCoordinate][adventurer.yCoordinate] == "prize") {
    let treasure = randomElement(prizes);
    let message = randomElement(info);
    alert(message);
    alert("Obtained: " + treasure);
    adventurer.prizes.push(treasure);
    adventurer.prizeCounter++;
    adventurer.prizes.splice(adventurer.prizes.indexOf(treasure), 1);
    map[3][3] = "blank";
    document.getElementById("info").innerHTML = "Our hero found: " + treasure;
  } else if ((adventurer.xCoordinate == 6 && adventurer.yCoordinate == 1) && map[adventurer.xCoordinate][adventurer.yCoordinate] == "prize") {
    let treasure = randomElement(prizes);
    let message = randomElement(info);
    alert(message);
    alert("Obtained: " + treasure);
    adventurer.prizes.push(treasure);
    adventurer.prizeCounter++;
    adventurer.prizes.splice(adventurer.prizes.indexOf(treasure), 1);
    map[6][1] = "blank";
    document.getElementById("info").innerHTML = "Our hero found: " + treasure;
  } else if ((adventurer.xCoordinate == 1 && adventurer.yCoordinate == 6) && map[adventurer.xCoordinate][adventurer.yCoordinate] == "prize") {
    let treasure = randomElement(prizes);
    let message = randomElement(info);
    alert(message);
    alert("Obtained: " + treasure);
    adventurer.prizes.push(treasure);
    adventurer.prizeCounter++;
    adventurer.prizes.splice(adventurer.prizes.indexOf(treasure), 1);
    map[1][6] = "blank";
    document.getElementById("info").innerHTML = "Our hero found: " + treasure;
  } else if ((adventurer.xCoordinate == 1 && adventurer.yCoordinate == 1) && map[adventurer.xCoordinate][adventurer.yCoordinate] == "prize") {
    let treasure = randomElement(prizes);
    let message = randomElement(info);
    alert(message);
    alert("Obtained: " + treasure);
    adventurer.prizes.push(treasure);
    adventurer.prizeCounter++;
    adventurer.prizes.splice(adventurer.prizes.indexOf(treasure), 1);
    map[1][1] = "blank";
    document.getElementById("info").innerHTML = "Our hero found: " + treasure;
  }
}

function move() {
  let choice = prompt("Where would you like to move?\n N for north\n E for east\n S for south\n W for west");
  console.log(choice);
  switch (choice) {
    case "n":
      adventurer.yCoordinate--;
      if (adventurer.yCoordinate == 0) {
        alert("You've hit a wall! Returning to previous location.");
        adventurer.yCoordinate++;
        adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
      }
      break;
    case "e":
      adventurer.xCoordinate++;
      if (adventurer.xCoordinate >= 7) {
        alert("You've hit a wall! Returning to previous location.");
        adventurer.xCoordinate--;
        adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
      }
      break;
    case "s":
      adventurer.yCoordinate++;
      if (adventurer.yCoordinate >= 7) {
        alert("You've hit a wall! Returning to previous location.");
        adventurer.yCoordinate--;
        adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
      }
      break;
    case "w":
      adventurer.xCoordinate--;
      if (adventurer.xCoordinate == 0) {
        alert("You've hit a wall! Returning to previous location.");
        adventurer.xCoordinate++;
        adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
      }
      break;
  }
}

function encounter() {
  if ((adventurer.xCoordinate == 6 && adventurer.yCoordinate == 2) && map[adventurer.xCoordinate][adventurer.yCoordinate] == "monster") {
    let mob = randomElement(monsters);
    let message = randomElement(info);
    alert(message);
    alert("Obtained: " + treasure);
    adventurer.prizes.push(treasure);
    adventurer.prizeCounter++;
    adventurer.prizes.splice(adventurer.prizes.indexOf(treasure), 1);
    map[3][3] = "blank";
    document.getElementById("info").innerHTML = "Our hero fought: " + treasure;
  }
}

// introduction();
game();

// for (let i = 0; i < adventurer.prizes.length; i++) {
//   console.log(adventurer.prizes[i]);
// }

function game() {
  document.getElementById("health").innerHTML = "Your current health: " + adventurer.health;
  document.getElementById("prizeCounter").innerHTML = "Your current number of prizes: " + adventurer.prizeCounter;
  for (let i = 0; i < adventurer.prizes.length; i++) {
    document.getElementById("prizes").innerHTML = (i + 1) + ": " + adventurer.prizes[i];
  }
  document.getElementById("location").innerHTML = "Your current position: " + adventurer.xCoordinate + ", " + adventurer.yCoordinate;
  while (activeGame == true) {
    move();
    clearInfo();
    outcome();
    console.log("Prize array size: " + adventurer.prizes.length);
    document.getElementById("health").innerHTML = "Your current health: " + adventurer.health;
    document.getElementById("prizeCounter").innerHTML = "Your current number of prizes: " + adventurer.prizeCounter;
    for (let i = 0; i < adventurer.prizes.length; i++) {
      document.getElementById("prizes").innerHTML = "Your inventory: <br/>" + (i + 1) + ": " + adventurer.prizes[i];
    }
    document.getElementById("location").innerHTML = "Your current position: " + adventurer.xCoordinate + ", " + adventurer.yCoordinate;
  }
}
