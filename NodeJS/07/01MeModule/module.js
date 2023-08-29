const moduleMe = {
  id: 1,
  name: "martin",
  myName: function (age) {
    return `Hi ${this.name} ${age}`;
  },
};

module.exports = moduleMe;
