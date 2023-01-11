
//bai 1
function getElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
var array = [2, 1, 4, 3, 6, 5];
console.log(getElement(array));

//bai 2

function getCountElement(array){
let obj =  {};

for (const iterator of array) {
    obj[iterator]? obj[iterator]++: (obj[iterator] = 1)
}

return obj
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))

//   let getCountElement = ["one", "two", "three", "one", "one", "three"];

