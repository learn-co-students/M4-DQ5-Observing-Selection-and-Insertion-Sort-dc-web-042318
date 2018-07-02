function insertionSort(arr) {
  // your code here
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for (let i = 1; i < arr.length; i += 1) {
    // let temp = arr[i];
    // arr[i] = arr[i - 1];
    // arr[i - 1] = temp;
    for (let j = i; j > 0; j -= 1) {
      if (arr[j] < arr[j - 1]) {
        let temp2 = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp2;
      } else {
        break;
      }
    }
  }

  // for (let i = arr.length - 1; i > 0; i -= 1) {
  //   for (let j = i; j > 0; j -= 1) {
  //     if (arr[i - 1] > arr[i]) {
  //       let temp = arr[i];
  //       arr[i] = arr[i - 1];
  //       arr[i - 1] = temp;
  //     }
  //   }
  // }
}
