/*
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
*/

function getWinningNumbers(card: string): number[] {
  const [cardNumber, cardValues] = card.split(":");
  const [winningRow, numberRow] = cardValues.split("|");
  const winningNumbers = winningRow
    .trim()
    .split(" ")
    .map((cur) => cur.trim())
    .filter(Boolean)
    .map(Number);
  const numbers = numberRow
    .trim()
    .split(" ")
    .map((cur) => cur.trim())
    .filter(Boolean)
    .map(Number);

  return numbers.filter((number) => winningNumbers.includes(number));
}

export function calculatePoints(card: string): number {
  const winningNumbers = getWinningNumbers(card);
  return winningNumbers.length > 0 ? Math.pow(2, winningNumbers.length - 1) : 0;
}

export function sumAllPoints(input: string[]) {
  return input.reduce((result, card) => {
    return result + calculatePoints(card);
  }, 0);
}

export function calculateTotalScratchcards(input: string[]) {
  const state = input.reduce((acc, card, i) => {
    acc[i] = 1;
    return acc;
  }, {} as { [key: number]: number });

  for (let i = 0; i < input.length; i++) {
    const card = input[i];
    const nWinningNumbers = getWinningNumbers(card).length;
    for (let k = 0; k < state[i]; k++) {
      let j = i + 1;
      while (j < i + nWinningNumbers + 1) {
        state[j] = state[j] + 1;
        j++;
      }
    }
  }

  return Object.values(state).reduce((result, value) => result + value, 0);
}
