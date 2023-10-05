function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const prev = (mid + arr.length - 1) % arr.length;
      const next = (mid + 1) % arr.length;
  
      if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
        return mid;
      } else if (arr[mid] <= arr[right]) {
        right = mid - 1;
      } else if (arr[mid] >= arr[left]) {
        left = mid + 1;
      }
    }
  
    return 0;
  }
  

module.exports = findRotationCount