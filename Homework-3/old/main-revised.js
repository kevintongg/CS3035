/*
 * Developed with Firefox
 *
 * Copyright (C) 2017 Kevin Tong — All Rights Reserved
 *
 * You may not use, distribute or modify this code.
 *
 */

console.log('hello begin');
$(document).ready(() => {
  console.log('hello after ready');
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

  const monsters = ["Kel'thuzad", // 0
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

// 4,6 monster
// 5,3 monster
// 1,2 monster
// 6,1 prize
// 1,6 prize
// 4,3 potion
// 3,5 potion

// Adventurer starts at 6, 4
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

  const playerName = $('#textbox').val();

  const adventurer = new Adventurer(playerName, playerHealth, 0, [], x, y);

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

  const monster1 = new Monster(randomElement(monsters), randomHealth(10, 15),
    randomElement(prizes), true);
  const monster2 = new Monster(randomElement(monsters), randomHealth(10, 15),
    randomElement(prizes), true);
  const monster3 = new Monster(randomElement(monsters), randomHealth(10, 15),
    randomElement(prizes), true);

  function introduction() {
    console.log('hello intro');
    document.getElementById('info').innerHTML = 'Welcome!' +
      '\nThis is a text based game where you must either find the goal with two prizes in hand in order to win or die. Whichever comes first.\n' +
      'Your goal is to find and defeat all the monsters with at least two treasures/prizes in your inventory.\n' +
      'Let us begin.';
  }

  function potion() {
    console.log('hello potion');
    alert(`${adventurer.name} has found a potion!`);
    const regen = potionCalculator();
    alert(`${adventurer.name} drinks it and gains ${regen} health!`);
    adventurer.health += regen;
    const message = randomElement(potionMessages);
    potionMessages.filter(item => item !== message);
    alert(`${adventurer.name} now has ${adventurer.health} health!`);
    document.getElementById('info').innerHTML = `${adventurer.name} drank a potion at (${adventurer.xCoordinate}, ${adventurer.yCoordinate}) and gained ${regen} health`;
  }

  function move() {
    console.log('hello move');
    // const choice = prompt('Where would you like to move?\n\n "n" for north\n
    // "e" for east\n "s" for south\n "w" for west');
    // $('.click').click(() => {
    //   // switch (choice) {
    //   // change cases to id names
    //   switch ($(this).attr('id')) {
    //     case 'north':
    //       lastX = adventurer.xCoordinate;
    //       lastY = adventurer.yCoordinate;
    //       adventurer.yCoordinate--;
    //       if (adventurer.yCoordinate === 0) {
    //         alert("You've hit a wall! Returning to previous location.");
    //         document.getElementById('info').innerHTML = `${adventurer.name} has
    // hit a wall at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
    //         adventurer.yCoordinate++;
    //         adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
    //       }
    //       break;
    //     case 'east':
    //       lastX = adventurer.xCoordinate;
    //       lastY = adventurer.yCoordinate;
    //       adventurer.xCoordinate++;
    //       if (adventurer.xCoordinate >= 7) {
    //         alert("You've hit a wall! Returning to previous location.");
    //         document.getElementById('info').innerHTML = `${adventurer.name} has
    // hit a wall at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
    //         adventurer.xCoordinate--;
    //         adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
    //       }
    //       break;
    //     case 'south':
    //       lastX = adventurer.xCoordinate;
    //       lastY = adventurer.yCoordinate;
    //       adventurer.yCoordinate++;
    //       if (adventurer.yCoordinate >= 7) {
    //         alert("You've hit a wall! Returning to previous location.");
    //         document.getElementById('info').innerHTML = `${adventurer.name} has
    // hit a wall at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
    //         adventurer.yCoordinate--;
    //         adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
    //       }
    //       break;
    //     case 'west':
    //       lastX = adventurer.xCoordinate;
    //       lastY = adventurer.yCoordinate;
    //       adventurer.xCoordinate--;
    //       if (adventurer.xCoordinate === 0) {
    //         alert("You've hit a wall! Returning to previous location.");
    //         document.getElementById('info').innerHTML = `${adventurer.name} has
    // hit a wall at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
    //         adventurer.xCoordinate++;
    //         adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    // });
    $('#north').click(() => {
      lastX = adventurer.xCoordinate;
      lastY = adventurer.yCoordinate;
      adventurer.yCoordinate--;
      if (adventurer.yCoordinate === 0) {
        alert("You've hit a wall! Returning to previous location.");
        document.getElementById('info').innerHTML = `${adventurer.name} has      hit a wall at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        adventurer.yCoordinate++;
        adventurer.position = map[adventurer.xCoordinate][adventurer.yCoordinate];
      }
    });
  }

  function monsterOne() {
    const message = randomElement(encounterMessages);
    alert(message);
    encounterMessages.filter(message => message !== message);
    alert(`You have encountered: ${monster1.name}.\n\n${monster1.name} has ${monster1.health} health.`);
    const question = prompt('Would you like to fight?\n\n"y" for yes\n"n" for no');
    switch (question) {
      case 'y':
        while (monster1.alive === true) {
          alert(`Your current health: ${adventurer.health}. \nThe monster's current health: ${monster1.health}.`);
          const playerDamage = playerDamageCalculator();
          const monsterDamage = monsterDamageCalculator();
          alert(`${adventurer.name} deals ${playerDamage} damage to ${monster1.name}.`);
          alert(`${monster1.name} deals ${monsterDamage} damage to you.`);
          monster1.health -= playerDamage;
          adventurer.health -= monsterDamage;
          if (monster1.health <= 0) {
            const monsterTreasure = randomElement(prizes);
            alert(`${adventurer.name} has defeated ${monster1.name}!\n\nYou have found: ${monsterTreasure}`);
            alert(`${adventurer.name} put their new item "${monsterTreasure}" into their inventory.`);
            adventurer.prizeCounter++;
            for (let i = 0; i <= adventurer.loot.length; i++) {
              if (adventurer.loot[i] === undefined) {
                adventurer.loot.push(monsterTreasure);
                break;
              }
            }
            prizes = prizes.filter(item => item !== monsterTreasure);
            monster1.alive = false;
            map[4][6] = 'blank';
            break;
          }
          const continuation = prompt(`${adventurer.name}'s current health: ${adventurer.health}. \nThe monster's current health: ${monster1.health}.\n\nWould you like to keep fighting?\n\n"y" for yes\n"n" for no`);
          if (continuation === 'n') {
            adventurer.xCoordinate = lastX;
            adventurer.yCoordinate = lastY;
            alert('You have escaped to the room you were previously in.');
            break;
          }
        }
        if (monster1.health <= 0) {
          document.getElementById('info').innerHTML = `${adventurer.name} has defeated ${monster1.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        } else {
          document.getElementById('info').innerHTML = `${adventurer.name} encountered ${monster1.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        }
        break;
      case 'n':
        document.getElementById('info').innerHTML = `${adventurer.name} has escaped from ${monster1.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        alert('You have escaped to the room you were previously in.');
        adventurer.xCoordinate = lastX;
        adventurer.yCoordinate = lastY;
        break;
      default:
        break;
    }
  }

  function monsterTwo() {
    const message = randomElement(encounterMessages);
    alert(message);
    encounterMessages.filter(message => message !== message);
    alert(`You have encountered: ${monster2.name}.\n\n${monster2.name} has ${monster2.health} health.`);
    const question = prompt('Would you like to fight?\n\n"y" for yes\n"n" for no');
    switch (question) {
      case 'y':
        while (monster2.health > 0) {
          alert(`Your current health: ${adventurer.health}. \nThe monster's current health: ${monster2.health}.`);
          const playerDamage = playerDamageCalculator();
          const monsterDamage = monsterDamageCalculator();
          alert(`${adventurer.name} deals ${playerDamage} damage to ${monster2.name}.`);
          alert(`${monster2.name} deals ${monsterDamage} damage to you.`);
          monster2.health -= playerDamage;
          adventurer.health -= monsterDamage;
          if (monster2.health <= 0) {
            const monsterTreasure = randomElement(prizes);
            alert(`You have defeated ${monster2.name}!\n\nYou have found: ${monsterTreasure}`);
            alert(`You put your new item "${monsterTreasure}" into your inventory.`);
            adventurer.prizeCounter++;
            for (let i = 0; i <= adventurer.loot.length; i++) {
              if (adventurer.loot[i] === undefined) {
                adventurer.loot.push(monsterTreasure);
                break;
              }
            }
            prizes = prizes.filter(item => item !== monsterTreasure);
            monster2.alive = false;
            map[5][3] = 'blank';
            break;
          }
          const continuation = prompt(`Your current health: ${adventurer.health}. \nThe monster's current health: ${monster2.health}.\n\nWould you like to keep fighting?\n\n"y" for yes\n"n" for no`);
          if (continuation === 'n') {
            adventurer.xCoordinate = lastX;
            adventurer.yCoordinate = lastY;
            alert('You have escaped to the room you were previously in.');
            break;
          }
        }
        if (monster2.health <= 0) {
          document.getElementById('info').innerHTML = `${adventurer.name} has defeated ${monster2.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        } else {
          document.getElementById('info').innerHTML = `${adventurer.name} encountered ${monster2.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        }
        break;
      case 'n':
        document.getElementById('info').innerHTML = `${adventurer.name} has escaped from ${monster2.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        alert('You have escaped to the room you were previously in.');
        adventurer.xCoordinate = lastX;
        adventurer.yCoordinate = lastY;
        break;
      default:
        break;
    }
  }

  function monsterThree() {
    const message = randomElement(encounterMessages);
    alert(message);
    encounterMessages.filter(item => item !== message);
    alert(`You have encountered: ${monster3.name}.\n\n${monster3.name} has ${monster3.health} health.`);
    const question = prompt('Would you like to fight?\n\n"y" for yes\n"n" for no');
    switch (question) {
      case 'y':
        while (monster3.health > 0) {
          alert(`Your current health: ${adventurer.health}. \nThe monster's current health: ${monster3.health}.`);
          const playerDamage = playerDamageCalculator();
          const monsterDamage = monsterDamageCalculator();
          alert(`${adventurer.name} deals ${playerDamage} damage to ${monster3.name}.`);
          alert(`${monster3.name} deals ${monsterDamage} damage to you.`);
          monster3.health -= playerDamage;
          adventurer.health -= monsterDamage;
          if (monster3.health <= 0) {
            const monsterTreasure = randomElement(prizes);
            alert(`You have defeated ${monster3.name}!\n\nYou have found: ${monsterTreasure}`);
            alert(`You put your new item "${monsterTreasure}" into your inventory.`);
            adventurer.prizeCounter++;
            for (let i = 0; i <= adventurer.loot.length; i++) {
              if (adventurer.loot[i] === undefined) {
                adventurer.loot.push(monsterTreasure);
                break;
              }
            }
            prizes = prizes.filter(item => item !== monsterTreasure);
            monster3.alive = false;
            map[1][2] = 'blank';
            break;
          }
          const continuation = prompt(`Your current health: ${adventurer.health}. \nThe monster's current health: ${monster3.health}.\n\nWould you like to keep fighting?\n\n"y" for yes\n"n" for no`);
          if (continuation === 'n') {
            adventurer.xCoordinate = lastX;
            adventurer.yCoordinate = lastY;
            alert('You have escaped to the room you were previously in.');
            break;
          }
        }
        if (monster3.health <= 0) {
          document.getElementById('info').innerHTML = `${adventurer.name} has defeated ${monster3.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        } else {
          document.getElementById('info').innerHTML = `${adventurer.name} encountered ${monster3.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        }
        break;
      case 'n':
        document.getElementById('info').innerHTML = `${adventurer.name} has escaped from ${monster3.name} at (${adventurer.xCoordinate}, ${adventurer.yCoordinate})`;
        alert('You have escaped to the room you were previously in.');
        adventurer.xCoordinate = lastX;
        adventurer.yCoordinate = lastY;
        break;
      default:
        break;
    }
  }

  function exploration() {
    console.log('hello explore');
    if (map[adventurer.xCoordinate][adventurer.yCoordinate] === 'prize') {
      const treasure = randomElement(prizes);
      const message = randomElement(explorationMessages);
      alert(message);
      alert(`Obtained: ${treasure}`);
      for (let i = 0; i <= adventurer.loot.length; i++) {
        if (adventurer.loot[i] === undefined) {
          adventurer.loot.push(treasure);
          break;
        }
      }
      prizes = prizes.filter(item => item !== treasure);
      adventurer.prizeCounter++;
      map[adventurer.xCoordinate][adventurer.yCoordinate] = 'blank';
      document.getElementById('info').innerHTML = `${adventurer.name} found: ${treasure} at (6, 1)`;
    } else if ((adventurer.xCoordinate === 4 && adventurer.yCoordinate === 6) && monster1.alive === true && map[adventurer.xCoordinate][adventurer.yCoordinate] === 'monster') {
      monsterOne();
    } else if ((adventurer.xCoordinate === 5 && adventurer.yCoordinate === 3) && monster2.alive === true && map[adventurer.xCoordinate][adventurer.yCoordinate] === 'monster') {
      monsterTwo();
    } else if ((adventurer.xCoordinate === 1 && adventurer.yCoordinate === 2) && monster3.alive === true && map[adventurer.xCoordinate][adventurer.yCoordinate] === 'monster') {
      monsterThree();
    } else if (map[adventurer.xCoordinate][adventurer.yCoordinate] === 'potion') {
      potion();
      map[adventurer.xCoordinate][adventurer.yCoordinate] = 'blank';
    } else if (map[adventurer.xCoordinate][adventurer.yCoordinate] === 'blank' || map[adventurer.xCoordinate][adventurer.yCoordinate] === 'start') {
      document.getElementById('info').innerHTML = `${adventurer.name} has entered an empty room`;
    }
  }

  function game() {
    console.log('hello game');
    document.getElementById('health').innerHTML = `Your current health: ${adventurer.health}`;
    document.getElementById('prizeCounter').innerHTML = `Your current number of prizes: ${adventurer.prizeCounter}`;
    document.getElementById('inventory').innerHTML = 'Your inventory: <br/>';
    document.getElementById('prizes').innerHTML = adventurer.loot.join('<br/>');
    document.getElementById('location').innerHTML = `Your current position: ${adventurer.xCoordinate}, ${adventurer.yCoordinate}`;
    while (activeGame) {
      move();
      exploration();
      document.getElementById('health').innerHTML = `Your current health: ${adventurer.health}`;
      document.getElementById('prizeCounter').innerHTML = `Your current number of prizes: ${adventurer.prizeCounter}`;
      document.getElementById('inventory').innerHTML = 'Your inventory: <br/>';
      document.getElementById('prizes').innerHTML = adventurer.loot.join('<br/>');
      document.getElementById('location').innerHTML = `Your current position: ${adventurer.xCoordinate}, ${adventurer.yCoordinate}`;


      console.log(monster1.alive && monster2.alive && monster3.alive);


      if ((!monster1.alive && !monster2.alive && !monster3.alive)
        && adventurer.prizeCounter >= 2) {
        document.getElementById('info').innerHTML = `${adventurer.name} has won the game!`;
        alert('You have won!');
        break;
      }
      if (adventurer.health <= 0) {
        alert('You have died.');
        break;
      }
    }
  }

  introduction();
  game();
});
