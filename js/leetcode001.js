/*
1. Two Sum
Easy

20044

705

Add to List

Share
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


*/
{
    function twoSum(nums, target){
        let map = new Map;

        for (var i = 0; i < nums.length; i++){
            let comp = target - nums[i];
            if (map.has(comp)){
                return [map.get(comp), i]
            }
            map.set(nums[i], i)
        }
    }

    arr = [1, 3, 5, 6];
    target = 8;
    console.log(twoSum(arr, target));
    arr = [4, 7, 2, 8];
    target = 12;
    console.log(twoSum(arr, target));
}