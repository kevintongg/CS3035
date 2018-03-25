const array = [3, 2, 5, 4, 8, 6];

const squared = array.map(x => x ** 2);

console.log(array);
console.log(squared);
console.log(sort(array));

function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
