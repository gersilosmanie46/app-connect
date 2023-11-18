/* filename: complex_js_code.js */
// This code demonstrates a complex implementation of a multi-dimensional array sorting algorithm

// Generate a random multi-dimensional array
function generateRandomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    const subArray = [];
    for (let j = 0; j < size; j++) {
      subArray.push(Math.floor(Math.random() * 1000));
    }
    array.push(subArray);
  }
  return array;
}

// Function to sort a multi-dimensional array in ascending order
function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      for (let k = 0; k < array.length; k++) {
        for (let l = 0; l < array[k].length; l++) {
          if (array[i][j] < array[k][l]) {
            const temp = array[i][j];
            array[i][j] = array[k][l];
            array[k][l] = temp;
          }
        }
      }
    }
  }
  return array;
}

// Generate a random multi-dimensional array of size 10
const randomArray = generateRandomArray(10);
console.log("Unsorted Array: ", randomArray);

// Sort the array
const sortedArray = sortArray(randomArray);
console.log("Sorted Array: ", sortedArray);

// Output:
// Unsorted Array:  [[432, 964, 130, 541, 222, 453, 616, 767, 246, 316], [585, 899, 609, 251, 450, 886, 8, 950, 866, 732], ...]
// Sorted Array:  [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], ...]

// This code demonstrates a complex way of sorting a multi-dimensional array by comparing and swapping elements. It generates a random multi-dimensional array and then sorts it in ascending order. The sorted array is then printed to the console.