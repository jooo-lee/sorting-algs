function selectionSort(arr) {
    /* 
    Let first element of our unsorted array be the smallest element
    Iterate through the unsorted array and compare with each element to find the actual smallest number
    Swap with first unsorted element if we have a new smallest element
    Repeat starting with the next unsorted element in our array
    Stop when we reach the end of our array
    */

    // Iterate through array
    for (let i = 0; i < arr.length; i++) {
        // Let current element be smallest element
        let currMin = i;
        // Find actual smallest element in the rest of the unsorted array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[currMin]) {
                currMin = j;
            }
        }
        // Swap elements if we found an element smaller than our original smallest element
        if (currMin != i) {
            let tmp = arr[i];
            arr[i] = arr[currMin];
            arr[currMin] = tmp;
        }
    }
    return arr;
}