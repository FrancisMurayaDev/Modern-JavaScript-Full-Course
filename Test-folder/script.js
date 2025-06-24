const nested = [2, 4, [7, 9]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

//i = 2
//j = 7
//k = 9
