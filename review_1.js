function removeMaxNumberFromArray(_numbers) {
  const copiedNumbers = _numbers.slice();
  const maxNumber = Math.max(...copiedNumbers);
  const indexOfMaxNumber = copiedNumbers.indexOf(maxNumber);
  copiedNumbers.splice(indexOfMaxNumber, 1);
  return copiedNumbers;
}
const numbers = [10, 500, 234, 965, 221];

const returnedMaxNumber = removeMaxNumberFromArray(numbers);

console.log(returnedMaxNumber);
console.log(numbers);

function sortNumbers(_numbers) {
  const copiedNumbersOfSort = _numbers.slice();
  copiedNumbersOfSort.sort(function(a, b) {
    return a - b;
  });
  return copiedNumbersOfSort;
}

const beforeSortNumbers = [1000, 10, 500, 234, 965, 221, 102];

const returnedSortNumber = sortNumbers(beforeSortNumbers);

console.log(returnedSortNumber);
console.log(beforeSortNumbers);
