// This approach doest not work because a string like "4oneight" will be computed as "41" instead of "48".
// But it's cool because it reuses the first solution

import {
  calculateTrebuchetCalibration as dumbCalculateTrebuchetCalibration,
  processDocumentRow,
} from ".";

function parseRow(word: string, row: string, number: string): string {
  return row.replace(word, number);
}
function parseRowReverse(word: string, row: string, number: string): string {
  return row
    .split("")
    .reverse()
    .join("")
    .replace(word, number)
    .split("")
    .reverse()
    .join("");
}

function parseDocument(document: string[]): string[] {
  document = document.map((row) => parseRow("one", row, "1"));
  document = document.map((row) => parseRow("two", row, "2"));
  document = document.map((row) => parseRow("three", row, "3"));
  document = document.map((row) => parseRow("four", row, "4"));
  document = document.map((row) => parseRow("five", row, "5"));
  document = document.map((row) => parseRow("six", row, "6"));
  document = document.map((row) => parseRow("seven", row, "7"));
  document = document.map((row) => parseRow("eight", row, "8"));
  document = document.map((row) => parseRow("nine", row, "9"));
  document = document.map((row) => parseRowReverse("eno", row, "1"));
  document = document.map((row) => parseRowReverse("owt", row, "2"));
  document = document.map((row) => parseRowReverse("eerht", row, "3"));
  document = document.map((row) => parseRowReverse("ruof", row, "4"));
  document = document.map((row) => parseRowReverse("evif", row, "5"));
  document = document.map((row) => parseRowReverse("xis", row, "6"));
  document = document.map((row) => parseRowReverse("neves", row, "7"));
  document = document.map((row) => parseRowReverse("thgie", row, "8"));
  document = document.map((row) => parseRowReverse("enin", row, "9"));
  return document;
}

export function calculateTrebuchetCalibration(spelledOutDocument: string[]) {
  const document = parseDocument(spelledOutDocument);

  document.map((r) => console.log(r, processDocumentRow(r)));
  return dumbCalculateTrebuchetCalibration(document);
}
