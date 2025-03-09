export function add(numbers) {
  if (numbers.trim() === "") return 0;
  return numbers
    .split(",")
    .map((num) => parseInt(num.trim()))
    .reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}
