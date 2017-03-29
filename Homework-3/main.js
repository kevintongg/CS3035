import $ from 'jquery';

const map = [
  // 0,0 0,1 0,2 0,3 0,4 0,5 0,6 0,7
  ['wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall'],
  // 1,0 1,1 1,2 1,3 1,4 1,5 1,6 1,7
  ['wall',
    'blank',
    'monster',
    'potion',
    'blank',
    'blank',
    'prize',
    'wall'],
  // 2,0 2,1 2,2 2,3 2,4 2,5 2,6 2,7
  ['wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall'],
  // 3,0 3,1 3,2 3,3 3,4 3,5 3,6 3,7
  ['wall',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'blank',
    'wall'],
  // 4,0 4,1 4,2 4,3 4,4 4,5 4,6 4,7
  ['wall',
    'blank',
    'blank',
    'potion',
    'blank',
    'blank',
    'monster',
    'wall'],
  // 5,0 5,1 5,2 5,3 5,4 5,5 5,6 5,7
  ['wall',
    'blank',
    'blank',
    'monster',
    'blank',
    'blank',
    'blank',
    'wall'],
  // 6,0 6,1 6,2 6,3 6,4 6,5 6,6 6,7
  ['wall',
    'prize',
    'blank',
    'blank',
    'start',
    'blank',
    'blank',
    'wall'],
  // 7,0 7,1 7,2 7,3 7,4 7,5 7,6 7,7
  ['wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall',
    'wall'],
];

const monsterList = ["Kel'thuzad", // 0
  "Kael'thas Sunstrider", // 1
  'Arthas Menethil', // 2
  'Deathwing', // 3
  'Garrosh Hellscream', // 4
  'Archimonde', // 5
  "Gul'dan"]; // 6
const prizes = ['Black Ice [Polearm]', // 0
  'Excalibur [Sword]', // 1
  'Sword of a Thousand Truths [Sword]', // 2
  'Lambent Light [Rapier]', // 3
  'Elucidator [Sword]', // 4
  'Dark Repulser [Sword]', // 5
  'Titanium Exoskeleton [Armor]', // 6
  'Purple Floppyslapper [Bludgeon]']; // 7
const explorationMessages = ['You see something bright. Ooh! Shiny!', // 0
  'You see a treasure chest. To your surprise, this is the item you have been wanting all your life!', // 1
  'You find an item that could really save your life when you really need it.', // 2
  'You find an interesting item. Hrm. Quite.', // 3
  'You find an item you always wished was real from your video games!', // 4
  'You find an exotic item. Could be one of a kind.']; // 5
const encounterMessages = ['You sense a powerful enemy.', // 1
  'You can feel an extraordinary aura.', // 2
  'You have a feeling that this will be one of the hardest fights of your life.']; // 3
const potionMessages = ['You feel reinvigorated.', // 1
  'You feel refreshed.', // 2
  'You feel like you could do things you could not do before!']; // 3
const playerHealth = 50;
const x = 6;
const y = 4;
let lastX;
let lastY;
const activeGame = true;

function Adventurer(name, health, prizeCounter, loot, xCoordinate, yCoordinate) {
  this.name = name;
  this.health = health;
  this.prizeCounter = prizeCounter;
  this.loot = loot;
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
}

function Monster(name, health, prize, alive) {
  this.name = name;
  this.health = health;
  this.prize = prize;
  this.alive = alive;
}

function randomHealth(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function playerDamageCalculator() {
  return Math.floor(Math.random() * 5) + 1;
}

function monsterDamageCalculator() {
  return Math.floor(Math.random() * 4) + 1;
}

function potionCalculator() {
  return Math.floor(Math.random() * (15 - 5) + 5);
}

const playerName = $('#nameBox').val();

const hero = new Adventurer(playerName, playerHealth, 0, [], x, y);

const monsters = [
  new Monster(randomElement(monsterList), randomHealth(10, 15), randomElement(prizes), true),
  new Monster(randomElement(monsterList), randomHealth(10, 15), randomElement(prizes), true),
  new Monster(randomElement(monsterList), randomHealth(10, 15), randomElement(prizes), true),
];

$(document).ready(() => {
  function setName() {
    $('#info').html(playerName);
    document.write('hello');
  }
  setName();
});
