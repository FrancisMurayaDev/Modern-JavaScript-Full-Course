const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstOddNumber = myArray.find(element => {
  if (element % 2 !== 0) return element;
});

console.log(firstOddNumber);
