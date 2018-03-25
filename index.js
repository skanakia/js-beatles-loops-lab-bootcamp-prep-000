function theBeatlesPlay(arr1, arr2) {
  var newarray = [];
  for (var i=0; i < arr1.length; i++) {
    newarray.push('${arr1[i]} plays ${arr2[i]}');
  }
  return newarray
}