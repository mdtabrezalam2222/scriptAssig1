function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('Input must be a non-empty array.');
    }
  
    let max = numbers[0]; 
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; 
      }
    }
  
    return max;
  }

const numbersArray = [5, 8, 2, 10, 4];
const maximumNumber = findMax(numbersArray);
console.log(maximumNumber); // Output: 10

  