function twoSum(nums: number[], target: number): number[] {
  let container = new Map(); //index is key
  for (let i = 0; i < nums.length; i++) {
    const val = container.get(nums[i]);
    if (val != null) {
      return [val, i];
    }
    container.set(target - nums[i], i); // directly set the number to be found, optimize runtime
  }
  return [0, 0];
}
