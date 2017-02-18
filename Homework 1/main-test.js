var map = [
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
    " ",
    " ",
    " ",
    "prize",
    "wall"],
  
  // 2,0 2,1 2,2 2,3 2,4 2,5 2,6 2,7
  ["wall",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "wall"],
  
  // 3,0 3,1 3,2 3,3 3,4 3,5 3,6 3,7
  ["wall",
    " ",
    " ",
    "prize",
    " ",
    " ",
    " ",
    "wall"],
  
  // 4,0 4,1 4,2 4,3 4,4 4,5 4,6 4,7
  ["wall",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "wall"],
  
  // 5,0 5,1 5,2 5,3 5,4 5,5 5,6 5,7
  ["wall",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "wall"],
  
  // 6,0 6,1 6,2 6,3 6,4 6,5 6,6 6,7
  ["wall",
    "prize",
    " ",
    " ",
    " ",
    " ",
    " ",
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

// 3,3 prize
// 6,1 prize
// 1,6 prize
// 1,1 prize

var hitPoints = 23;
var monsters = ["Kel'thuzad", // 0
  "Kael'thas Sunstrider", // 1
  "Arthas Menethil", // 2
  "Deathwing", // 3
  "Garrosh Hellscream", // 4
  "Archimonde", // 5
  "Gul'dan"]; // 6
var prizes = ["Invisibility Potion (Potion)", // 0
  "Excalibur (Sword)", // 1
  "Sword of a Thousand Truths (Sword)", // 2
  "Lambent Light (Rapier)", // 3
  "Elucidator (Sword)", // 4
  "Dark Repulsor (Sword)", // 5
  "Titanium Exoskeleton (Armor)", // 6
  "Purple Floppyslapper (Bludgeon)"]; // 7
var fightMessages = ["You've found something that wants to fight you!", "A wild mob has appeared!", "You've found something peculiar. It turns out to be an enemy!"];
var playerPrizes = [];
var treasure = "";
var prizeCounter = 0;
var win = false;
var xCoordinate = 6;
var yCoordinate = 4;
var playerPosition = map[xCoordinate][yCoordinate];

// map[1][1] = new monster(randomElement(monsters), randomHealth(1,35), randomElement(prize));
map[1][2] = "123";
map[6][4] = "Start";
// map[7][7] = new monster();

for (var i = 0; i < prizes.length; i++) {
  console.log((i + 1) + ". " + prizes[i]);
}

function printMap(map) {
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
      if (map[i][j] === " ") {
        map[i][j] = "blank";
      }
      document.write(" ");
      document.write(map[i][j]);
    }
    document.write("</br>");
  }
}

printMap(map);

var adventurer = {
  health: hitPoints,
  position: playerPosition,
  prize: playerPrizes,
  numberOfPrizes: prizeCounter
};

var monster = {
  name: randomElement(monsters),
  health: randomHealth(1, 20),
  prize: randomElement(prizes)
};

game();

function game() {
  alert("Welcome to the text adventure game!");
  alert("You are an adventurer who has the ability to defeat any enemy with one hit.");
  alert("Let's proceed.");
  while (!win) {
    move();
    // Prizes if... else
    if (playerPosition == map[3][3] === "prize") {
      alert("Congratulations! You've found some treasure!");
      treasure = randomElement(prizes);
      prizeCounter++;
      playerPrizes.push(treasure);
      map[3][3] = " ";
      prizes.splice(prizes.indexOf(treasure), 1);
    } else if (playerPosition == map[6][1] === "prize") {
      alert("Congratulations! You've found some treasure!");
      treasure = randomElement(prizes);
      console.log(treasure);
      prizeCounter++;
      playerPrizes.push(treasure);
      map[6][1] = " ";
      prizes.splice(prizes.indexOf(treasure), 1);
    } else if (playerPosition == map[1][6] === "prize") {
      alert("Congratulations! You've found some treasure!");
      treasure = randomElement(prizes);
      prizeCounter++;
      playerPrizes.push(treasure);
      map[1][6] = " ";
      prizes.splice(prizes.indexOf(treasure), 1);
    } else if (playerPosition == map[1][1] === "prize") {
      alert("Congratulations! You've found some treasure!");
      treasure = randomElement(prizes);
      prizeCounter++;
      playerPrizes.push(treasure);
      map[1][1] = " ";
      prizes.splice(prizes.indexOf(treasure), 1);
    }
    for (var i = 0; i < playerPrizes.length; i++) {
      console.log(playerPrizes[i]);
    }
    
    // Monsters if... else
    if (playerPosition == map[1][2] === "monster") {
      
    }
  }
}

function move() {
  var choice = "";
  choice = prompt("Where would you like to move?\n N for north\n E for east\n S for south\n W for west");
  console.log(choice);
  switch (choice) {
    case "n":
      yCoordinate--;
      if (yCoordinate <= 0) {
        alert("You've hit a wall!");
        yCoordinate++;
        playerPosition = map[xCoordinate][yCoordinate];
      }
      playerPosition = map[xCoordinate][yCoordinate];
      break;
    case "e":
      xCoordinate++;
      if (xCoordinate >= 7) {
        xCoordinate--;
        playerPosition = map[xCoordinate][yCoordinate];
      }
      playerPosition = map[xCoordinate][yCoordinate];
      break;
    case "s":
      yCoordinate++;
      if (yCoordinate >= 7) {
        yCoordinate--;
        playerPosition = map[xCoordinate][yCoordinate];
      }
      playerPosition = map[xCoordinate][yCoordinate];
      break;
    case "w":
      xCoordinate--;
      if (xCoordinate <= 0) {
        xCoordinate++;
        playerPosition = map[xCoordinate][yCoordinate];
      }
      playerPosition = map[xCoordinate][yCoordinate];
      break;
    default:
  }
  console.log(xCoordinate + ", " + yCoordinate);
}

function fight() {
  var choice = "";
  choice = prompt(randomElement(fightMessages) + "\n Would you like to fight?\n\n y for Yes\n n for No");
  switch (choice) {
    case "y":
      var randomEnemy = randomElement(monsters);
      alert(randomEnemy + " has appeared!");
      alert("You strike " + randomEnemy + ".");
      alert(randomEnemy + " has died!");
      monsters.splice(monsters.indexOf(randomEnemy), 1);
      break;
  }
  
}

function randomHealth(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// function randomPosition() {
//   var row = Math.floor(Math.random() * map.length);
//   var column = Math.floor(Math.random() * map.length);
//   return map[row][column];
// }
