/*
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
*/
const isDigit = (char: string) => /^\d+$/.test(char);

function getNumberFromPosition(
  x: number,
  y: number,
  explodedInput: string[][]
): number {
  const number = [];
  if (!isDigit(explodedInput[x][y])) return 0;

  let startindex = y;
  if (y - 1 > 0 && isDigit(explodedInput[x][y - 1])) {
    for (let i = y; isDigit(explodedInput[x][i]); i--) {
      startindex = i;
    }
  }

  for (let i = startindex; isDigit(explodedInput[x][i]); i++) {
    number.push(explodedInput[x][i]);
    explodedInput[x][i] = ".";
  }

  return Number(number.join(""));
}

export function isEnginePart(
  explodedInput: string[][],
  x: number,
  y: number,
  endOfNumberIndex: number
): boolean {
  // Check before
  if (y > 0 && explodedInput[x][y - 1] !== ".") return true;
  // Check after
  if (
    endOfNumberIndex < explodedInput[x].length - 1 &&
    explodedInput[x][endOfNumberIndex + 1] !== "."
  )
    return true;

  // Check above
  for (let i = y; i <= endOfNumberIndex; i++) {
    if (x > 0 && explodedInput[x - 1][i] !== ".") return true;
  }
  // Check below
  for (let i = y; i <= endOfNumberIndex; i++) {
    if (x < explodedInput.length - 1 && explodedInput[x + 1][i] !== ".")
      return true;
  }
  // Check diagonals
  if (x > 0 && y > 0 && explodedInput[x - 1][y - 1] !== ".") return true;
  if (
    x > 0 &&
    endOfNumberIndex < explodedInput[x].length - 1 &&
    explodedInput[x - 1][endOfNumberIndex + 1] !== "."
  )
    return true;
  if (
    x < explodedInput.length - 1 &&
    y > 0 &&
    explodedInput[x + 1][y - 1] !== "."
  )
    return true;
  if (
    x < explodedInput.length - 1 &&
    endOfNumberIndex < explodedInput[x].length - 1 &&
    explodedInput[x + 1][endOfNumberIndex + 1] !== "."
  )
    return true;

  return false;
}

export function sumAllParts(input: string[]): number {
  let total = 0;
  const explodedInput = input.map((row) => row.split(""));

  for (let x = 0; x < explodedInput.length; x++) {
    for (let y = 0; y < explodedInput[x].length; y++) {
      if (isDigit(explodedInput[x][y])) {
        // Get last digit index of current number
        const tmp = explodedInput[x]
          .slice(y)
          .findIndex((char) => !isDigit(char));
        const endOfNumberIndex =
          tmp === -1 ? explodedInput[x].length - 1 : tmp + y - 1;

        if (isEnginePart(explodedInput, x, y, endOfNumberIndex)) {
          total += Number(
            explodedInput[x].slice(y, endOfNumberIndex + 1).join("")
          );
        }
        // Skip next characters of number
        y = endOfNumberIndex + 1;
      }
    }
  }
  return total;
}

export function sumGearRatios(input: string[]): number {
  let total = 0;
  const explodedInput = input.map((row) => row.split(""));

  for (let x = 0; x < explodedInput.length; x++) {
    for (let y = 0; y < explodedInput[x].length; y++) {
      if (explodedInput[x][y] === "*") {
        const numbers = [];
        // Check before
        if (y > 0 && isDigit(explodedInput[x][y - 1]))
          numbers.push(getNumberFromPosition(x, y - 1, explodedInput));
        // Check after
        if (y < explodedInput[x].length - 1 && isDigit(explodedInput[x][y + 1]))
          numbers.push(getNumberFromPosition(x, y + 1, explodedInput));

        // Check above left diagonals
        if (x > 0 && y > 0 && isDigit(explodedInput[x - 1][y - 1]))
          numbers.push(getNumberFromPosition(x - 1, y - 1, explodedInput));

        // Check below left diagonals
        if (
          x < explodedInput.length - 1 &&
          y > 0 &&
          isDigit(explodedInput[x + 1][y - 1])
        ) {
          numbers.push(getNumberFromPosition(x + 1, y - 1, explodedInput));
        }

        // Check above
        if (x > 0 && isDigit(explodedInput[x - 1][y]))
          numbers.push(getNumberFromPosition(x - 1, y, explodedInput));

        // Check below
        if (x < explodedInput.length - 1 && isDigit(explodedInput[x + 1][y]))
          numbers.push(getNumberFromPosition(x + 1, y, explodedInput));

        // Check above and right diagonals
        if (x > 0 && isDigit(explodedInput[x - 1][y + 1])) {
          numbers.push(getNumberFromPosition(x - 1, y + 1, explodedInput));
        }

        // Check below and right diagonals
        if (
          x < explodedInput.length - 1 &&
          isDigit(explodedInput[x + 1][y + 1])
        ) {
          numbers.push(getNumberFromPosition(x + 1, y + 1, explodedInput));
        }

        if (numbers.filter(Boolean).length >= 2) {
          total += numbers.reduce((a, b) => a * b, 1);
        }
      }
    }
  }
  return total;
}
