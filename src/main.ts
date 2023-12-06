// import { calculateTrebuchetCalibration } from "./#1";
import { calculateTrebuchetCalibration } from "./#1/partTwo";
import { trebuchetInput } from "./#1/input";
import {
  getPowerOfMinimum,
  isGamePossible,
  processPossibleGames,
  processPowerOfMinimumGames,
} from "./#2/2";
import { cubeConundrumInput } from "./#2/input";
import { sumAllParts, sumGearRatios } from "./#3/3";
import { gearRatiosInput } from "./#3/input";

// console.log("#1");
// console.log(calculateTrebuchetCalibration(trebuchetInput));
// console.log(calculateTrebuchetCalibration(["six4seven"]))

// console.log("#2");
// console.log(
//   getPowerOfMinimum("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
// );
// console.log(processPowerOfMinimumGames(cubeConundrumInput));

console.log("#3");
console.log(sumAllParts(gearRatiosInput));
console.log(sumGearRatios(gearRatiosInput));
