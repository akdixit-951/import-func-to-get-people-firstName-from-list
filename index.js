const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

// console.log(peopleNames);

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
