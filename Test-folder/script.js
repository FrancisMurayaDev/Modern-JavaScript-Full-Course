const resturant = {
  name: "Classico",
  location: "Nairobi",
  categories: ["Chicken", "Pizza", "Soup", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruscheta", "Garlic", "Bread", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({
    address,
    time = "22:00",
    mainIndex = 1,
    starterIndex = 1,
  }) {
    //Here
    console.log(
      `Order recieved, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

resturant.orderDelivery({
  address: "Kivu",
  mainIndex: 0,
});

// Order recieved, Pizza and Bruscheta will be delivered to Kivu at 22:00
