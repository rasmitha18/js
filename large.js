function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if (current > largest) {
            secondLargest = largest;
            largest = current;
        } else if (current > secondLargest && current !== largest) {
            secondLargest = current;
        }
    }

    return secondLargest;
}

console.log(secondLargest([10, 25, 8, 40, 30]));