import { calculateTrebuchetCalibration, processDocumentRow } from ".";
import {
  calculateTrebuchetCalibration as calculateTrebuchetCalibration2,
  processDocumentRow as processDocumentRow2,
} from "./bruteForce";

const exampleInput = [
  "1abc2",
  "pqr3stu8vwx",
  "a1b2c3d4e5f",
  "treb7uchet",
];
const exampleInput2 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
  "sixsrvldfour4seven",
  "53hvhgchljnlxqjsgrhxgf1zfoureightmlhvvv",
  "fives2dznl",
  "wefwtwowjiefooneight",
];


describe("#1 - First part", () => {
  test("1", () => {
    expect(processDocumentRow(exampleInput[0])).toBe(12);
  });
  test("2", () => {
    expect(processDocumentRow(exampleInput[1])).toBe(38);
  });
  test("3", () => {
    expect(processDocumentRow(exampleInput[2])).toBe(15);
  });
  test("4", () => {
    expect(processDocumentRow(exampleInput[3])).toBe(77);
  });
  test("total", () => {
    expect(calculateTrebuchetCalibration(exampleInput)).toBe(142);
  });
});

describe("#1 - Second part", () => {
  test("1", () => {
    expect(processDocumentRow2(exampleInput2[0])).toBe(29);
  });
  test("2", () => {
    expect(processDocumentRow2(exampleInput2[1])).toBe(83);
  });
  test("3", () => {
    expect(processDocumentRow2(exampleInput2[2])).toBe(13);
  });
  test("4", () => {
    expect(processDocumentRow2(exampleInput2[3])).toBe(24);
  });
  test("5", () => {
    expect(processDocumentRow2(exampleInput2[4])).toBe(42);
  });
  test("6", () => {
    expect(processDocumentRow2(exampleInput2[5])).toBe(14);
  });
  test("7", () => {
    expect(processDocumentRow2(exampleInput2[6])).toBe(76);
  });
  test("8", () => {
    expect(processDocumentRow2(exampleInput2[7])).toBe(67);
  });
  test("9", () => {
    expect(processDocumentRow2(exampleInput2[8])).toBe(58);
  });
  test("10", () => {
    expect(processDocumentRow2(exampleInput2[9])).toBe(52);
  });
  test("11", () => {
    expect(processDocumentRow2(exampleInput2[10])).toBe(28);
  });

  test("total", () => {
    expect(calculateTrebuchetCalibration2(exampleInput2)).toBe(486);
  });
});
