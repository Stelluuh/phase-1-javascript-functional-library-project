function myEach (collection, alert) {
   
   let collectionValues = Object.values(collection)
   collectionValues.forEach(n => alert(n))
   /*  
   -------------Another Way-----------------
   for(i = 0; i < collection.length; i++){
      alert(collection[i])
   }
    -------------Another Way-----------------
    for(let n of collection) {
      alert(n)
    }
   */
   return collection
}

/*---------------------------------------------------------*/

function myMap(collection, callback) {
   //returns a new array (by using .map) so that it doesn't modify the original array
   let collectionValues = Object.values(collection)
   return collectionValues.map(n => callback(n))
}

/*---------------------------------------------------------*/

// myReduce GOAL:
// 1) returns the correct reduced value when passed an initial value
// 2) returns the correct reduced value when not passed an initial value
// ✓ does not modify the original array
// 3) returns the correct reduced value from object values
// ✓ does not modify the original object

//BEHAVIOR:
//It will take in a collection, callback, and acc as arguments
//the callback is already given so we don't have to worry about what this function is. Just that we are iterating and keeping track of the accumulator.  // the callback takes the current value of acc, the current element/value in our iteration, and a reference to the entire collection

function myReduce(collection, callback, acc) { 
   let collectionValues = Object.values(collection) //3) &  doesn't modify original array.
   acc = acc || collectionValues.shift() ; //1) & 2): if acc is not given a value, it will be undefined, which means it will start with the second expression. the .shift() removes the first element(which is undefined), this is destructive.
   for (let num in collectionValues) {
      acc = callback(acc, collectionValues[num], collectionValues)} //since we are keeping track of acc, we are going to set the acc = to whatever the callback's return value is. And the cb runs again after its done with the iteration. Once we are done, we will return the acc: 
   return acc
}
/*---------------------------------------------------------*/
//Iterates through a collection and passes each into a callback to find a matching value. If found, return that value, otherwise return undefined.


function myFind(collection, callback) {
   let collectionValues = Object.values(collection)
   for(let item in collectionValues) {
      let value = collectionValues[item]
      // console.log('collectionValues[item]: ', value)
      // console.log('item:', item)
      if(callback(value)){
         return value 
      }
   }
}

function myFilter(collection, callback) {
   let collectionValues = Object.values(collection)
   let newArray = [];

   for(let item in collection){
      let value = collectionValues[item]
      if(callback(value)) {
         newArray.push(value)
      } 
   }
   return newArray
}

function mySize(collection) {
   let values = Object.keys(collection)
   // console.log('values: ', values)
   return values.length
}


//const slicedArray = array.slice(0, n);
function myFirst(array, n = false) {


   // return (stop) ? array.slice(0, stop) : array[0]

   if(n === false) {
      return array[0] 
   } else {
     return array.slice(0, n)
   }
}

function myLast(array, n = false) {
   if(n === false) {
      return array[array.length -1]
   } else {
      return array.slice(-n)
   }
}

function myKeys(object) {
   let array = [];
   let values = Object.keys(object)
   console.log(values)
   values.forEach(element => array.push(element))
 
   return array
}

function myValues(object) {
   let array = [];
   let values = Object.values(object)
   values.forEach(element => array.push(element) )
   return array
}
