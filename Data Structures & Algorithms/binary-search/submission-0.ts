class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let hi = nums.length; 
        let lo = 0; 
        while(lo < hi) {
            const midpoint = lo + Math.floor((hi - lo) / 2); 
            const current = nums[midpoint]; 
            if(current === target) {
                return midpoint; 
            }
            else if(current > target) {
                hi = midpoint; 
            }
            else {
                lo = midpoint + 1; 
            }
        }
        return -1; 
    }
}
