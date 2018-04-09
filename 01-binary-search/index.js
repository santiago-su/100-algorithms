// works with sorted arrays
// begins by comparing the middle element of the array with the target value
// if the target value matches the middle element, its position in the array is returned
// If the target value is less than or greater than the middle element
// the search continues in the lower or upper half of the array
// respectively, eliminating the other half from consideration
//


// This can break the stack because of deep recursivity
const main = (list, item, min, max) => {
  const listMiddleIndex = (min + max) / 2 | 0;
  if (item === list[listMiddleIndex]) {
    return list[listMiddleIndex];
  }
  if (list[listMiddleIndex] < item) {
    return main(list, item, listMiddleIndex + 1, max);
  }
  if (list[listMiddleIndex] > item) {
    return main(list, item, min, listMiddleIndex - 1);
  }
}

module.exports = {
  main
};