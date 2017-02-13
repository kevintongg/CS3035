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

function printMap(map) {
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
      map[i][j] = "_____ ";
      document.write(map[i][j]);
    }
    document.write("</br>");
  }
}

printMap(map);

var hitPoints = 23;
var prizes = ["Invisibility Potion", "Excalibur (Sword)", "Sword of a Thousand Truths (Sword)", "Lambent Light (Rapier)" , "Elucidator (Sword)", "Dark Repulsor (Sword)", "Titanium Exoskeleton (Armor)"];

var adventurer = function(health, position, prize) {
  health = health;
  position = position;
  prize = prize;
}

function randomPosition() {
  var position = (Math.floor(Math.random() * (map.length * map[0].length)));
  return position;
}

function randomPrize() {
  var prize = prizes[Math.floor(Math.random() * prizes.length)];
  return prize;
}

function damageCalculator() {
    var x = Math.floor((Math.random() * 10) + 1);
}

map[6][4] = new adventurer(hitPoints, randomPosition(), randomPrize());

if (map[6][4] != null || map[6][4] != undefined) {
  map[6][4] = "S";
  document.write()
}
