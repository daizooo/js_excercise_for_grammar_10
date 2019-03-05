function removeMaxNumberFromArray(_array) {
  const copiedArray = _array.slice();
  const maxNumber = Math.max(...copiedArray);
  const indexOfmaxNumber = copiedArray.indexOf(maxNumber);
  copiedArray.splice(indexOfmaxNumber, 1);
  return copiedArray;
}

const array = [10, 500, 234, 965, 221];

const returnedArray = removeMaxNumberFromArray(array);

console.log(array);
console.log(returnedArray);

function sortNumbers(_array) {
  const copiedArray1 = _array.slice();
  copiedArray1.sort(function(a, b) {
    return b - a;
  });
  return copiedArray1;
}

const array1 = [1000, 10, 500, 234, 965, 221, 102];

const returnedArray2 = sortNumbers(array1);

console.log(array1);
console.log(returnedArray2);
