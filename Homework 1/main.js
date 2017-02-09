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

var printMap = function(map) {
  for (var i = 0; i < map.length; i++) {
    document.write("_");
    for (var j = 0; j < map[i].length; j++) {
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
  prize = prize
};

map[1][2] = monster("prize",100,"trophy");

document.write("hello"+map[1][2]["name"]);

// function damageCalculator() {
//     var x = Math.floor((Math.random() * 10) + 1);
//     document.write(x);
// }
