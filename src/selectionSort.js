function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
