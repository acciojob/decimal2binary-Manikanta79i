function threeSum(arr, target) {
  const n = arr.length;
  if (n < 3) {
    return [];
  }

  // Sort the array to help with duplicate elimination and to identify when we
  // can stop searching since the array is sorted in ascending order.
  arr.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < n - 2; i++) {
    // Skip duplicates
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    // Use two pointers to find a pair that sum up to the complement of arr[i]
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === target) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;

        // Skip duplicates
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

module.exports = threeSum;
