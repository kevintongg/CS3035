var map = [
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "]
]

// var map = [[]];

// map[1][1] = new monster(randomElement(monsters), randomHealth(1,35), randomElement(priz));
map[1][2] = "123";
map[6][4] = "Start";
// map[7][7] = new monster();

function printMap(map) {
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
      document.write(" ");
      document.write(map[i][j]);
    }
    document.write("</br>");
  }
}

printMap(map);

var hitPoints = 23;
var monsters = ["Kel'thuzad", "Kael'thas Sunstrider", "Arthas Menethil", "Deathwing", "Garrosh Hellscream", "Archimonde", "Gul'dan"];
var prizes = ["Invisibility Potion (Potion)", "Excalibur (Sword)", "Sword of a Thousand Truths (Sword)", "Lambent Light (Rapier)" , "Elucidator (Sword)", "Dark Repulsor (Sword)", "Titanium Exoskeleton (Armor)", "Purple Floppyslapper (Bludgeon)"];

var adventurer = function(health, position, prize) {
  health = health;
  position = position;
  prize = prize;
}

// var monster = function(name, health, prize) {
//   name = randomElement(monsters);
//   health = randomNumber(1, 35);
//   prize = randomElement(prizes);
// }

var monster = function(name, health, prize) {
  name = name;
  health = health;
  prize = prize;
}


function randomHealth(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomElement(array) {
  var random = array[Math.floor(Math.random() * array.length)];
  return random;
}

function randomPosition() {
  var position = (Math.floor(Math.random() * (map.length * map[0].length)));
  return position;
}

function damageCalculator() {
    var x = Math.floor((Math.random() * 10) + 1);
}

map[6][4] = new adventurer(hitPoints, randomPosition(), randomPrize());
