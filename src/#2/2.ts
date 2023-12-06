// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

const maxValues = {
  red: 12,
  green: 13,
  blue: 14,
};

function getGameId(game: string): number {
  return Number(game.split(":")[0].split(" ")[1]);
}

export function isGamePossible(game: string): boolean {
  const rounds = game
    .split(":")[1]
    .split(";")
    .map((a) => a.trim());

  for (const round of rounds) {
    const picks = round.split(", ").map((cur) => cur.trim());
    for (const pick of picks) {
      const [amount, color] = pick.split(" ") as [
        string,
        keyof typeof maxValues
      ];
      if (Number(amount) > maxValues[color]) {
        return false;
      }
    }
  }

  return true;
}

export function processPossibleGames(input: string[]): number {
  return input.reduce((result, game) => {
    return result + (isGamePossible(game) ? getGameId(game) : 0);
  }, 0);
}

export function getPowerOfMinimum(game: string): number {
  const minimum = { red: 1, green: 1, blue: 1 };
  const rounds = game
    .split(":")[1]
    .split(";")
    .map((a) => a.trim());

  for (const round of rounds) {
    const picks = round.split(", ").map((cur) => cur.trim());
    picks.forEach((pick) => {
      const [amount, color] = pick.split(" ") as [
        string,
        keyof typeof maxValues
      ];
      if (Number(amount) > minimum[color]) {
        minimum[color] = Number(amount);
      }
    });
  }

  return Object.values(minimum).reduce((a, b) => a * b, 1);
}

export function processPowerOfMinimumGames(input: string[]): number {
  return input.reduce((result, game) => {
    return result + getPowerOfMinimum(game);
  }, 0);
}
