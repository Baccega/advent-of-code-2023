const isDigit = (char: string) => /\d/.test(char);

export function processDocumentRow(row: string): number {
    const firstDigit = row.split('').find(isDigit) ?? '';
    const secondDigit = row.split('').reverse().find(isDigit) ?? '';

    return Number(firstDigit + secondDigit);

}

export function calculateTrebuchetCalibration(document: string[]) {
    return document.map(processDocumentRow).reduce((a, b) => a + b, 0);
}