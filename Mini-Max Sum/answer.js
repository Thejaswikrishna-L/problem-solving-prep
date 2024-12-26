function miniMaxSum(arr) {
    let max = arr.reduce((prev, curr) =>  {return prev > curr ? prev : curr})
    let min = arr.reduce((prev, curr) =>  {return prev < curr ? prev : curr})
   
    let maxSum = arr.filter(item => item !== min).reduce((prev, curr) => prev+curr, 0)
    let minSum = arr.filter(item => item !== max).reduce((prev, curr) => prev+curr, 0)
    console.log(minSum, maxSum)


    // Optimized code

    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));  
}


function main() {
    miniMaxSum([5,5,5,5,5]);
}

main();
