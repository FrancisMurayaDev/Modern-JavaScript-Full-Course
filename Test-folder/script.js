const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedMovements = Object.groupBy(movements, function (move) {
  return move > 0 ? `deposits` : `withdrawals`;
});

console.log(groupedMovements);
