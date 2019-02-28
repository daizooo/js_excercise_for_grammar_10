function removeMaxNumberFromArray(_number) {
  const slicedNumber = _number.slice();
  const maxNumber = Math.max(...slicedNumber);
  const indexOfMaxNumber = slicedNumber.indexOf(maxNumber);
  slicedNumber.splice(indexOfMaxNumber, 1);
  return slicedNumber;
}

const numbers = [10, 500, 234, 965, 221];

console.log(numbers);
console.log(removeMaxNumberFromArray(numbers));

function sortNumbers(_numbers) {
  const copiedNumbers = _numbers.slice();
  copiedNumbers.sort(function (a, b) {
    return a - b;
  });
  return copiedNumbers;
}

const numbersOfsortNumbers = [1000, 10, 500, 234, 965, 221, 102];

console.log(numbersOfsortNumbers);
console.log(sortNumbers(numbersOfsortNumbers));
