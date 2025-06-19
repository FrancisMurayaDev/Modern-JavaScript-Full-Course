let dice = Math.trunc(Math.random() * 6) + 1;
// We want to keep rolling the dice until we roll a six

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log(`the roll has closed .........`);
}
