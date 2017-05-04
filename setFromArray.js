function setFromArray(arr) {
    var previousValue = arr[0];
    for(var aIndex =1;aIndex<arr.length;aIndex++) {
          if(arr[aIndex] === previousValue) {
             arr.splice(arr[aIndex],1)
             aIndex = aIndex - 1;
          }else {
             previousValue = arr[aIndex]
          }
    }
  return arr
}
