let arrayTest = [1, 4, 5, 8];
let arrayTest2 = [1, 4, 5, 8];

const checkSum = (array, k) => {
  let check = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] == k && i != j)
        check = true;
    }
  }
  console.log("Exercice 1:  " + check);
  return check;
}

checkSum(arrayTest, 19);


const checkBuild = (array) => {
  let max = array[array.length - 1];
  let count = 1;
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > max) {
      count += 1;
      max = array[i];
    }
  }
  console.log("Exercice 2 + 4 + 6: Appartements avec vue à l'Ouest:" + count);
  return count;
}

checkBuild(arrayTest);



const checkSum2 = (array, k) => {
  const set = new Set();
  for (let value of array) {
    if (set.has(k - value))
      return true;
    set.add(value);
  }
  return false;
}

console.log("Exercice 3 + 5:  " + checkSum2(arrayTest2, 9));
