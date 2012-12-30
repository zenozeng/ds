var quickSort = function(arr) {
    if (arr.length <= 1)
      return arr;
    if (arr.length == 2)
      return arr[0] < arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr[pivotIndex];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if(i == pivotIndex)
          continue;
        if(arr[i] < pivot)
          left.push(arr[i]);
        else
          right.push(arr[i]);
    }
    return quickSort(left).concat([pivot], quickSort(right));
};