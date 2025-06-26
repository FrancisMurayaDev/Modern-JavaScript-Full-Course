(function () {
  console.log(`This will only run once!`);
})();

(() => {
  console.log(`This too will run only once!`);
  const isPrivate = 23;
})();
