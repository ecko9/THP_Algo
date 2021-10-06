let arrayTest = [48, -2, 6, 12, 0, -4];
let count = 0;

const swap = (array, index1, index2) => {
  let tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
}


const mergeArray = (array1, array2) => {

  while (array2.length >= 1) {
    let isChecked = false;

    for (let i = 0; isChecked === false; i++) {
      count++;
      if (array2[0] <= array1[i]) {
        array1.splice(i, 0, array2.shift());
        isChecked = true;
      }
      if (i >= array1.length - 1) {
        array1.push(array2.shift());
        isChecked = true;
      }
    }
  }

  return array1;
}


const mergeSort = (array) => {

  let array1;
  let array2;

  if (array.length == 2) {
    array1 = [array[0]];
    array2 = [array[1]];
  } else {
    array1 = array.slice(0, Math.floor(array.length / 2));
    array2 = array.slice(Math.floor(array.length / 2));
  }

  if (array.length > 1)
    return mergeArray(mergeSort(array1), mergeSort(array2));
  return array;
}

console.table(arrayTest)
console.table(mergeSort(arrayTest));
console.log("Nombre d'opérations:  " + count);

