// Code your solution in this file!
// function returnFirstTwoDrivers(){
//   const drivers = function(driversArray){
//     driversArray.spice(0,2);
//   }
//   return drivers;
// }

const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = driversArray => {
  return driversArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
  return function(fare){
    return fare * integer;
  }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driversArray, whichPairFunction) => {
  return whichPairFunction(driversArray);
};
