const array = [0.00624, 0.00125, 0.00120];

console.log(array);

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[i]) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
}

console.log(array);
