// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]] 
function permuteUnique(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    const used = Array(nums.length).fill(false);
function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue;
            }
         current.push(nums[i]);
            used[i] = true;
            backtrack(current);
            current.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return result;
}
const nums = [1, 1, 2];
console.log(permuteUnique(nums));


// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permuteUniquee(numss) {
    const result = [];
    numss.sort((a, b) => a - b); 
    const used = Array(numss.length).fill(false); 
function backtrack(current) {
        if (current.length === numss.length) { 
            result.push([...current]); 
            return;
        }
        for (let i = 0; i < numss.length; i++) { 
            if (used[i]) { 
                continue;
            }
            current.push(numss[i]);
            used[i] = true; 
            backtrack(current); 
            current.pop(); 
            used[i] = false; 
        }
    }
    backtrack([]);
    return result;
}
const numss = [1, 2, 3];
console.log(permuteUniquee(numss));

