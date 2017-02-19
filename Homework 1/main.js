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
    "monster",
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
    "boss",
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

var playerHealth = 23;
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
var xLast;
var yLast;
var playerPosition = map[xCoordinate][yCoordinate];
var prizeVisited1 = false;
var prizeVisited2 = false;
var prizeVisited3 = false;
var prizeVisited4 = false;

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

introduction();
game();

function game() {
  while (!win) {
    move();
    // Prizes if... else
    if (playerPosition == map[3][3] && map[3][3] == "prize" && prizeVisited1 == false) {
      alert("Congratulations! You've found some treasure!");
      treasure = randomElement(prizes);
      prizeCounter++;
      playerPrizes.push(treasure);
      prizes.splice(prizes.indexOf(treasure), 1);
      map[3][3] = " ";
      prizeVisited1 = true;
    } else if (playerPosition == map[6][1] && map[6][1] == "prize") {
      if (prizeVisited2 == true) {
        alert("You have returned to the treasure room.")
      } else if (prizeVisited2 == false) {
        alert("Congratulations! You've found some treasure!");
        treasure = randomElement(prizes);
        console.log(treasure);
        prizeCounter++;
        playerPrizes.push(treasure);
        prizes.splice(prizes.indexOf(treasure), 1);
        map[6][1] = " ";
        prizeVisited2 = true;
      }
    } else if (playerPosition == map[1][6] && map[1][6] == "prize" && prizeVisited3 == false) {
      alert("Congratulations! You've found some treasure!");
      treasure = randomElement(prizes);
      prizeCounter++;
      playerPrizes.push(treasure);
      prizes.splice(prizes.indexOf(treasure), 1);
      map[1][6] = " ";
      prizeVisited3 = true;
    } else if (playerPosition == map[1][1] && map[1][1] == "prize" && prizeVisited4 == false) {
      alert("Congratulations! You've found some treasure!");
      treasure = randomElement(prizes);
      prizeCounter++;
      playerPrizes.push(treasure);
      prizes.splice(prizes.indexOf(treasure), 1);
      map[1][1] = " ";
      prizeVisited4 = true;
    }
    for (var i = 0; i < playerPrizes.length; i++) {
      console.log("Your current treasures: " + playerPrizes[i] + " | Counter: " + prizeCounter);
    }

    // Monsters if... else
    if (playerPosition == map[1][2] && map[1][2] == "monster") {
      fight();
    } else if (playerPosition == map[2][5] && map[2][5] == "monster") {
      fight();
    } else if (playerPosition == map[5][3] && map[5][3] == "boss") {
      fight();
      win = true;
    }
  }
  if (win == true) {
    alert("Congratulations, you've won the text adventure game!");
  }
}

function move() {
  var choice = prompt("Where would you like to move?\n N for north\n E for east\n S for south\n W for west");
  if (choice == null || choice == undefined) {
    choice = prompt("Where would you like to move?\n N for north\n E for east\n S for south\n W for west");
  }
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
        alert("You've hit a wall!");
        xCoordinate--;
        playerPosition = map[xCoordinate][yCoordinate];
      }
      playerPosition = map[xCoordinate][yCoordinate];
      break;
    case "s":
      yCoordinate++;
      if (yCoordinate >= 7) {
        alert("You've hit a wall!");
        yCoordinate--;
        playerPosition = map[xCoordinate][yCoordinate];
      }
      playerPosition = map[xCoordinate][yCoordinate];
      break;
    case "w":
      xCoordinate--;
      if (xCoordinate <= 0) {
        alert("You've hit a wall!");
        xCoordinate++;
        playerPosition = map[xCoordinate][yCoordinate];
      }
      playerPosition = map[xCoordinate][yCoordinate];
      break;
  }
  console.log(xCoordinate + ", " + yCoordinate);
}

function fight() {
  var choice = prompt(randomElement(fightMessages) + "\n Would you like to fight?\n\n y for Yes\n n for No");
  xLast = xCoordinate;
  yLast = yCoordinate;
  switch (choice) {
    case "y":
      var alive = true;
      var monsterHealth = 15;
      var randomEnemy = randomElement(monsters);
      alert(randomEnemy + " has appeared!");
      while (alive == true) {
        if (monsterHealth == 0) {
          alive = false;
        } else if (monsterHealth != 0) {
          alert("You strike " + randomEnemy + ".");
          monsterHealth -= monsterDamageCalculator();
          playerHealth -= playerDamageCalculator();
        }
      }
      alert(randomEnemy + " has died!");
      monsters.splice(monsters.indexOf(randomEnemy), 1);
      break;
    case "n":
      alert("You have ran away from the enemy!");
      playerPosition = map[xLast][yLast];
      console.log(xCoordinate + ", " + yCoordinate);
      break;
  }
}

function randomHealth(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function playerDamageCalculator() {
  return Math.floor((Math.random() * 4) + 1);
}

function monsterDamageCalculator() {
  return Math.floor((Math.random() * 5) + 1);
}

function introduction() {
  alert("Welcome to the text adventure game!");
  alert("You are an adventurer who has the ability to defeat any enemy with one hit.");
  alert("Let's proceed.");
}