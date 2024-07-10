function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return [];
}

numbersTest = [2, 7, 11, 15];

console.log(twoSum(numbersTest, 9));
console.log(twoSum(numbersTest, 23));
console.log(twoSum(numbersTest, 18));
