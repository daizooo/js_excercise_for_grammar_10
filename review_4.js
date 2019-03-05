const numbers = [10, 500, 234, 965, 221];
const copiedNumbers = numbers.slice();
const maxNumber = Math.max(...copiedNumbers);
const indexOfMaxNumber = copiedNumbers.indexOf(maxNumber);
copiedNumbers.splice(indexOfMaxNumber, 1);
console.log(numbers);
console.log(copiedNumbers);

const sortNumbers = [1000, 10, 500, 234, 965, 221, 102];
const copiedSortNumbers = sortNumbers.slice();
copiedSortNumbers.sort(function(a, b) {
  return a - b;
});
console.log(sortNumbers);
console.log(copiedSortNumbers);
