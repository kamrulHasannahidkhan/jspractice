function findKthLargest(nums, k) {
  let targetIndex = nums.length - k;
  function quickSelect(left, right) {
    let pivot = nums[right], pIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[pIndex]] = [nums[pIndex], nums[i]];
        pIndex++;
      }
    }
    [nums[pIndex], nums[right]] = [nums[right], nums[pIndex]];
    if (pIndex === targetIndex) return nums[pIndex];
    return pIndex < targetIndex ? quickSelect(pIndex + 1, right) : quickSelect(left, pIndex - 1);
  }
  return quickSelect(0, nums.length - 1);
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5