// bai 1
function getRandomElement(arr) {
    let i = arr.length * Math.random();
    // console.log(parseInt(i, 10));
    return arr[parseInt(i, 10)];
}
console.log(getRandomElement([1, 2, 3, 4]));

//bai2
function getCountElement(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        obj["" + temp] = 0;
    }
    for (let variable in obj) {
        for (let i = 0; i < arr.length; i++) {
            if (variable == arr[i]) obj["" + variable]++;
        }
    }
    return obj;
}
console.log(getCountElement(["one", "one", "two", "two", "three", "one", "four"]));