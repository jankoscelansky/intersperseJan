const intersperseJan = (arr, string) =>
  arr.reduce(
    (accumulator, currentValue, index, array) => [
      ...accumulator,
      currentValue,
      ...(index + 1 === array.lenght ? [] : [string]),
    ],
    []
  );
export { intersperseJan };
