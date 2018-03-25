function theBeatlesPlay(arr1, arr2) {
  var array = [];
  for (var i=0; i < arr1.length; i++) {
  array.push('${arr1[i]} plays ${arr2[i]}');
  }
  return array
}