const francis = {
  firstName: "Francis",
  lastName: "Muraya",
  birthYear: 1950,
  hadDriversLicense: true,
  friends: ["John", "Wick", "Doe"],
  summary: function () {
    this.summary = `My name is ${this.firstName} ${
      this.lastName
    }, I was born in ${this.birthYear}, I ${
      this.hadDriversLicense ? "have" : "dont have"
    } a driver's license. My friends are ${this.friends[0]}, ${
      this.friends[1]
    }, and ${this.friends[2]}`;

    return this.summary;
  },
};

francis.summary();

console.log(francis.summary);
