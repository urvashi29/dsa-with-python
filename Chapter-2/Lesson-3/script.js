function findAllCombinations(set, index, current) {
  if (index === set.length) {
    console.log(current);
    return;
  }
  findAllCombinations(set, index + 1, current);
  findAllCombinations(set, index + 1, current.concat(set[index]));
}

const set = ["a", "b"];
findAllCombinations(set, 0, []);

function findSubsetSum(arr, target) {
  let solution = [];

  // Recursive function to find a solution
  function backtrack(start, sum) {
    // Check if the solution is valid
    if (sum === target) {
      console.log(solution);
      return;
    }

    // Try all possible paths
    for (let i = start; i < arr.length; i++) {
      solution.push(arr[i]);
      backtrack(i + 1, sum + arr[i]);
      solution.pop();
    }
  }

  // Call the recursive function
  backtrack(0, 0);
}

// Test the function
findSubsetSum([1, 2, 3, 4, 5], 7);
