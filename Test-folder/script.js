const h1 = document.querySelector(`h1`);

const alertH1 = function () {
  alert(`You are hovering on the H1`);
  h1.removeEventListener(`mouseenter`, alertH1);
};

h1.addEventListener(`mouseenter`, alertH1);
