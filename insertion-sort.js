function insertionSort(arr) {
    /*
    We will have a sorted part of the array and
    an unsorted part of the array
    First, consider element at index 0 to be sorted
    Then while there are still unsorted elements left,
    look at the next unsorted element 
    Compare it to sorted elements and shift sorted elements
    to right if current unsorted element < current sorted element
    Then insert current unsorted element accordingly into sorted
    part of our array
    */

    for (let i = 1; i < arr.length; i++) {
        // Leftmost unsorted element
        let currUnsortedElem = arr[i];
        // Sorted element to compare to unsorted element,
        // starting with the rightmost sorted element
        let currSorted = i - 1;
        // Shift sorted elements over to right to make room
        // for current unsorted element
        while(currUnsortedElem < arr[currSorted] && currSorted >= 0) {
            arr[currSorted + 1] = arr[currSorted];
            currSorted--;
        }
        // Inserting current unsorted element into its proper
        // place in sorted part of array
        arr[currSorted + 1] = currUnsortedElem;
    }

    return arr;
}