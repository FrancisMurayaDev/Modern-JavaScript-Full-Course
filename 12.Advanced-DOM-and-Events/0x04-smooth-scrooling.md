# Smooth Scrolling

Select the button and the section you want to scroll to.

ie.

```js
const buttonScroll = document.querySelector(`.btn`);
const scrollTo = document.querySelector(`.section-1`);
```

then:

```js
buttonScroll.addEventListener(`click`, function () {
  sectionTo.scrollIntoView({ behaviour: `smooth` });
});
```
