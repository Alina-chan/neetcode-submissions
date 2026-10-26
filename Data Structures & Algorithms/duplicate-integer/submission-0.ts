class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if (nums.length > new Set(nums).size ) {
            return true
        }

        return false
    }
}
