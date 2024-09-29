const maxOfMins = (arr, k) => {
    let maxMin = -Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        const subArray = arr.slice(i, i + k);
        const min = Math.min(...subArray);
        maxMin = Math.max(maxMin, min);
    }
    return maxMin;
};

const lengthOfSegment = 1;
const space = [1, 2, 3, 1, 2];

console.log(maxOfMins(space, lengthOfSegment));
