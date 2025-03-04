const array = [3, 2, 1, 13, 8, 5, 0, 1];

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = arr.length >> 1;
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  const merged = [];

  while (left.length && right.length) {
    merged.push(
      left[0] < right[0] ? left.shift() : right.shift(),
    );
  }

  return [...merged, ...left, ...right];
};

console.log(mergeSort(array));
