function sortedFrequency(arr, num) {
    function findLeft(arr, target) {
      let left = 0;
      let right = arr.length - 1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === target) {
          if (mid === 0 || arr[mid - 1] !== target) {
            return mid;
          }
          right = mid - 1;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return -1;
    }
  
    function findRight(arr, target) {
      let left = 0;
      let right = arr.length - 1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === target) {
          if (mid === arr.length - 1 || arr[mid + 1] !== target) {
            return mid;
          }
          left = mid + 1;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return -1;
    }
  
    const leftIndex = findLeft(arr, num);
    if (leftIndex === -1) {
      return -1;
    }
    const rightIndex = findRight(arr, num);
    return rightIndex - leftIndex + 1;
  }
  

module.exports = sortedFrequency