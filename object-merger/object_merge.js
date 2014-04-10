/**
 * Simulate php object_merge function.
 * Works with collections and arrays.
 *
 * @param {Object/Array} arr1
 * @param {Object/Array} arr2
 * var a1 = {'aa':100, 'bb':2, 'cc':[6,7], 'dd':[12,13], 'ee':{'15':15,'16':16}};
 * var b1 = {'xx':101, 'bb':5, 'cc':8, 'dd':[14,15], 'ee':{'17':17,'18':18}};
 * var c = object_merge(a1, b1);
 * console.log(c) [in firebug]
 * Output: {'aa':100, 'bb': 5, 'cc':[6,7], 'dd':[12,13,14,15], 'ee':{'15':15,'16':16,'17':17,'18':18}, 'xx':101}
 *
 * @see http://stereointeractive.com/blog/2007/07/19/javascript-array-merge-object_merge/
 */
var object_merge = function(arr1, arr2){
  if((arr1 && (arr1 instanceof Array)) && (arr2 && (arr2 instanceof Array))){
    for (var idx in arr2) {
      arr1.push(arr2[idx]);
    }
  }else if((arr1 && (arr1 instanceof Object)) && (arr2 && (arr2 instanceof Object))){
    for(var idx in arr2){
      if(idx in arr1){
        if (typeof arr1[idx] == 'object' && typeof arr2 == 'object') {
          arr1[idx] = object_merge(arr1[idx], arr2[idx]);
        }else{
          arr1[idx] = arr2[idx];
        }
      }else{
        arr1[idx] = arr2[idx];
      }
    }
  }
  return arr1;
}