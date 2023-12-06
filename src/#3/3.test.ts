import { isEnginePart, sumAllParts, sumGearRatios } from "./3";

const exampleInput = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];
const explodedInput = exampleInput.map((row) => row.split(""));

describe("#3 - First part", () => {
  test("1", () => {
    expect(isEnginePart(explodedInput, 0, 0, 2)).toBe(true);
  });
  test("2", () => {
    expect(isEnginePart(explodedInput, 0, 5, 7)).toBe(false);
  });
  test("3", () => {
    expect(isEnginePart(explodedInput, 2, 2, 3)).toBe(true);
  });
  test("4", () => {
    expect(isEnginePart(explodedInput, 2, 6, 8)).toBe(true);
  });
  test("5", () => {
    expect(isEnginePart(explodedInput, 4, 0, 2)).toBe(true);
  });
  test("6", () => {
    expect(isEnginePart(explodedInput, 5, 7, 8)).toBe(false);
  });
  test("7", () => {
    expect(isEnginePart(explodedInput, 6, 2, 4)).toBe(true);
  });
  test("7", () => {
    expect(isEnginePart(explodedInput, 7, 6, 8)).toBe(true);
  });
  test("7", () => {
    expect(isEnginePart(explodedInput, 9, 1, 3)).toBe(true);
  });
  test("7", () => {
    expect(isEnginePart(explodedInput, 9, 5, 7)).toBe(true);
  });
  test("total", () => {
    expect(sumAllParts(exampleInput)).toBe(4361);
  });
});

describe("#3 - Second part", () => {
  test("total", () => {
    expect(sumGearRatios(exampleInput)).toBe(467835);
  });
});