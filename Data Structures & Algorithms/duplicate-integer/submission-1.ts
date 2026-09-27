class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const occurrences = new Set(nums); 
        return occurrences.size < nums.length; 
    }
}
