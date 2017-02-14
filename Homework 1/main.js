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

var hitPoints = 23;

var printMap = function(map) {
  for (var i = 0; i < map.length; i++) {
    // document.write("_");
    for (var j = 0; j < map[i].length; j++) {
      map[i][j] = "___ ";
      document.write(map[i][j]);
    }
    document.write("</br>");
  }
}

printMap(map);

// var player = {
//   health = 100,
//   mana = 100
// };

var monster = function(name, health, prize) {
  name = name;
  health = health;
  prize = prize;
}

// var location = function(position) {
//   position = map[Math.floor(Math.random() * map.length)][Math.floor(Math.random() * map.length)];
// }

// var randomSpot = function(map) {
//   var random = Math.floor((Math.random() * (map.length)));
//   return map[random][Math.floor((Math.random()) * (map[random].length)]
// }

var adventurer = function(health, position, prize) {
  health = health;
  position = location();
  prize = prizes[Math.floor(Math.random() * prizes.length)];
}

var prizes = ["Invisibility Potion (Potion)", "Excalibur (Sword)", "Sword of a Thousand Truths (Sword)", "Lambent Light (Rapier)" , "Elucidator (Sword)", "Dark Repulsor (Sword)", "Titanium Exoskeleton (Armor)", "Purple Floppyslapper (Bludgeon)"];

function damageCalculator() {
    var x = Math.floor((Math.random() * 10) + 1);
}

function randomPrize(prizes) {
  return prizes(Math.floor(Math.random() * prizes.length));
}

document.write("hello!");

map[1][2] = monster("prize",100,"trophy");
map[4][4] = adventurer(hitPoints, location(), randomPrize(prizes));

map[1][1] = "S";

document.write(map[1][1]);

document.write("hello"+map[1][2]["name"]);
