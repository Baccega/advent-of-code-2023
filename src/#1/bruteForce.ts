const digits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const isDigit = (char: string) => /\d/.test(char);

function checkDigit(row: string, z: number, digit: string): boolean {
  for (let i = 0; i < digit.length; i++) {
    const element = row[z + i] || "";
    if (element !== digit[i]) {
      return false;
    }
  }
  return true;
}
function checkDigitReverse(row: string, z: number, digit: string): boolean {
  for (let i = 0; i < digit.length; i++) {
    const element = row[z - i] || "";
    if (element !== digit[digit.length - i - 1]) {
      return false;
    }
  }
  return true;
}

export function processDocumentRow(row: string): number {
  let firstDigit = "";
  for (let index = 0; index < row.length && firstDigit === ""; index++) {
    const element = row[index];
    if (isDigit(element)) {
      firstDigit = element;
    }
    for (let z = 0; z < digits.length; z++) {
      const digit = digits[z];
      if (checkDigit(row, index, digit)) {
        firstDigit = String(z + 1);
      }
    }
  }
  let secondDigit = "";
  for (let index = row.length - 1; index >= 0 && secondDigit === ""; index--) {
    const element = row[index];
    if (isDigit(element)) {
      secondDigit = element;
    }
    for (let z = 0; z < digits.length; z++) {
      const digit = digits[z];
      if (checkDigitReverse(row, index, digit)) {
        secondDigit = String(z + 1);
      }
    }
  }
  return Number(firstDigit + secondDigit);
}

export function calculateTrebuchetCalibration(document: string[]) {
  return document.map(processDocumentRow).reduce((a, b) => a + b, 0);
}
