import {
  getPowerOfMinimum,
  isGamePossible,
  processPossibleGames,
  processPowerOfMinimumGames,
} from "./2";

const exampleInput = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];

describe("#2 - First part", () => {
  test("1", () => {
    expect(isGamePossible(exampleInput[0])).toBe(true);
  });
  test("2", () => {
    expect(isGamePossible(exampleInput[1])).toBe(true);
  });
  test("3", () => {
    expect(isGamePossible(exampleInput[2])).toBe(false);
  });
  test("4", () => {
    expect(isGamePossible(exampleInput[3])).toBe(false);
  });
  test("5", () => {
    expect(isGamePossible(exampleInput[4])).toBe(true);
  });
  test("total", () => {
    expect(processPossibleGames(exampleInput)).toBe(8);
  });
});

describe("#2 - Second part", () => {
  test("1", () => {
    expect(getPowerOfMinimum(exampleInput[0])).toBe(48);
  });
  test("2", () => {
    expect(getPowerOfMinimum(exampleInput[1])).toBe(12);
  });
  test("3", () => {
    expect(getPowerOfMinimum(exampleInput[2])).toBe(1560);
  });
  test("4", () => {
    expect(getPowerOfMinimum(exampleInput[3])).toBe(630);
  });
  test("5", () => {
    expect(getPowerOfMinimum(exampleInput[4])).toBe(36);
  });
  test("total", () => {
    expect(processPowerOfMinimumGames(exampleInput)).toBe(2286);
  });
});
