function sumFor(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log('sumFor:', sum);
  return sum;
}

function sumWhile(numbers: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  console.log('sumWhile:', sum);
  return sum;
}

function sumRecursion(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const result = numbers[0] + sumRecursion(numbers.slice(1));
  if (numbers.length === 4) console.log('sumRecursion:', result);
  return result;
}

function sumTheFunctionalWay(numbers: number[]): number {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log('sumTheFunctionalWay:', sum);
  return sum;
}

// Test call
const sample = [1, 2, 3, 4];
sumFor(sample);
sumWhile(sample);
sumRecursion(sample);
sumTheFunctionalWay(sample);
