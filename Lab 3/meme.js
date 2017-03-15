/**
 * Created by kevin on 23/2/2017.
 */


console.log('1. Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input array.\nE.g. [[1,2], [3,4]] should become [1,2,3,4].\nTo test, create and print out an array of arrays. Flatten it, then print out again. (2 pts)\n');

const list = [[1, 2], [3, 4], [5, [6, 7]]];

console.log(list);

const result = [].concat.apply([], list.concat.apply([], list));

console.log(result);

function Person(first, last, yearOfBirth, generation) {
  this.first = first;
  this.last = last;
  this.yearOfBirth = yearOfBirth;
  this.generation = generation;
}

console.log('\n2. Write a function using the higher order functions learned so far that takes an array of person objects discussed in lecture ' +
  'and adds a property to each object called “generation.”\n' +
  'If a person was born 1940 and before, they are in the “Greatest Generation.”\n' +
  'If they are born from 1941 to 1965, they are “Baby Boomers.”\nIf they are born from 1966 to 1976, they are “Generation X.”\n' +
  'If they are born from 1977 to 1995, they are “Milennials,” and if they are born 1996 and later they are “Gen Z.” \n');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Greatest Generation
const person1 = new Person('John', 'Smith', random(1920, 1940), null);
const person2 = new Person('Jane', 'Doe', random(1920, 1940), null);

// Baby Boomers
const person3 = new Person('James', 'Smith', random(1941, 1965), null);
const person4 = new Person('John', 'Johnson', random(1941, 1965), null);

// Generation X
const person5 = new Person('Robert', 'Williams', random(1966, 1976), null);
const person6 = new Person('Michael Jones', '', random(1966, 1976), null);

// Millenials
const person7 = new Person('Kevin', 'Tong', 1994, null);
const person8 = new Person('Cedric', 'Tong', 1995, null);


// Generation Z
const person9 = new Person('David', 'Davis', random(1996, 2017), null);
const person10 = new Person('Christopher', 'Clark', random(1996, 2017), null);

const people =
  [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10];

people.forEach((person) => {
  if (person.yearOfBirth <= 1940) {
    person.generation = 'Greatest Generation';
  } else if (person.yearOfBirth >= 1941 && person.yearOfBirth <= 1965) {
    person.generation = 'Baby Boomers';
  } else if (person.yearOfBirth >= 1966 && person.yearOfBirth <= 1976) {
    person.generation = 'Generation X';
  } else if (person.yearOfBirth >= 1977 && person.yearOfBirth <= 1995) {
    person.generation = 'Millenials';
  } else if (person.yearOfBirth) {
    person.generation = 'Generation Z';
  }
});

console.log(people);

console.log('\n3. Using your person data, filter out all the people who are not millennials.\n' +
  'Create a new function that uses map to transform each of these people objects into single strings that have their first and last name, a colon, and “Pokemon Go Fan."\n' +
  '"To test, print out all these strings (or you can just print the array as a whole). (3 pts))');

const newArray = people.filter(i => i.generation !== 'Millenials');

console.log(newArray);
