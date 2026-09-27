class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number,number>(); 
        for(let i = 0; i < nums.length; i++) {
            const currentValue = nums[i];
            const expected = target - currentValue;
            if(seen.has(expected)) {
                const smallerIndex = seen.get(expected);
                return [smallerIndex,i]; 
            }
            else {
                seen.set(currentValue, i);
            }
        }
        return []; 
    }
}
