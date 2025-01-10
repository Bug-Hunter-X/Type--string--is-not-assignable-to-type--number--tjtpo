function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseInt(a, 10);
  const numB = typeof b === 'number' ? b : parseInt(b, 10);
  return numA + numB;
}

function subtractSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseInt(a, 10);
  const numB = typeof b === 'number' ? b : parseInt(b, 10);
  return numA - numB;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); //6
const result3 = addSafe("5", "3"); // 8
const result4 = subtractSafe("10", "4"); // 6

console.log(result1, result2, result3, result4);