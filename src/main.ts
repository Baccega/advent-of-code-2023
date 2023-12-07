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
import { calculatePoints, calculateTotalScratchcards, sumAllPoints } from "./#4/4";
import { scratchcardsInput } from "./#4/input";

// console.log("#1");
// console.log(calculateTrebuchetCalibration(trebuchetInput));
// console.log(calculateTrebuchetCalibration(["six4seven"]))

// console.log("#2");
// console.log(
//   getPowerOfMinimum("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
// );
// console.log(processPowerOfMinimumGames(cubeConundrumInput));

// console.log("#3");
// console.log(sumAllParts(gearRatiosInput));
// console.log(sumGearRatios(gearRatiosInput));

console.log("#4");
// console.log(sumAllPoints(scratchcardsInput));
console.log(calculateTotalScratchcards(scratchcardsInput));
// console.log(
//   calculatePoints(
//     "Card   1: 57 76 72 11  8 28 15 38 54 46 | 77 87 71 98 40  7 84 43 61 64  5 50 19 83 79 99 36 47  4 95 30 44 37 55 26"
//   )
// );
