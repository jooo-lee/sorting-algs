function bubbleSort(arr) {
    /* 
    Iterate through array
    At each iteration, compare current element (starting at index 0) 
    with next element in array
    If current element > next element, swap them
    Repeat iteration until elements are sorted
    */

    for (let i = 0; i < arr.length; i++) {
        // We can save time since we know that the last 
        // i elements will be sorted
        for (let j = 0; j < arr.length - i - 1; j++) {
            // If element on left is bigger than its right
            // neighbour, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap using temporary variable
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}