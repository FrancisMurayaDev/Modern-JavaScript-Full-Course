function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

count();
