const isDigit = (str: string): boolean => {
  const digit = Number.parseInt(str);
  return !Number.isNaN(digit);
}

type DigitState = {
  num: string;
  cur: number;
  str: string;
  end: number;
};

function helper(strArray: string[], reverse: boolean): string {
  const digitState: DigitState[] = reverse
    ? [
        { num: "1", cur: 0, str: "eno", end: 3 },
        { num: "2", cur: 0, str: "owt", end: 3 },
        { num: "3", cur: 0, str: "eerht", end: 5 },
        { num: "4", cur: 0, str: "ruof", end: 4 },
        { num: "5", cur: 0, str: "evif", end: 4 },
        { num: "6", cur: 0, str: "xis", end: 3 },
        { num: "7", cur: 0, str: "neves", end: 5 },
        { num: "8", cur: 0, str: "thgie", end: 5 },
        { num: "9", cur: 0, str: "enin", end: 4 },
      ]
    : [
        { num: "1", cur: 0, str: "one", end: 3 },
        { num: "2", cur: 0, str: "two", end: 3 },
        { num: "3", cur: 0, str: "three", end: 5 },
        { num: "4", cur: 0, str: "four", end: 4 },
        { num: "5", cur: 0, str: "five", end: 4 },
        { num: "6", cur: 0, str: "six", end: 3 },
        { num: "7", cur: 0, str: "seven", end: 5 },
        { num: "8", cur: 0, str: "eight", end: 5 },
        { num: "9", cur: 0, str: "nine", end: 4 },
      ];
  return (
    strArray.reduce((result, char) => {
      if (result) return result;
      if (isDigit(char)) return char;

      for (const state of digitState) {
        if (state.str[state.cur] === char) {
          state.cur++;
        } else {
          if (state.str[0] === char){
            state.cur = 1;
          } else {
            state.cur = 0;
          }
        }
        if (state.cur === state.end) {
          return state.num;
        }
      }
      return result;
    }, "") || ""
  );
}

export function processDocumentRow(row: string): number {
  const firstDigit = helper(row.split(""), false);
  const secondDigit = helper(row.split("").reverse(), true);

  return Number(firstDigit + secondDigit);
}

export function calculateTrebuchetCalibration(document: string[]) {
  return document.map(processDocumentRow).reduce((a, b) => a + b, 0);
}
