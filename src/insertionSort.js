function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
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
}
