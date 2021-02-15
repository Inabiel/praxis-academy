const main = (callback, ...num) =>{
    return callback(...num)
}
const second_main = (...nums) =>{
    return nums.reduce((a,b) => a += b);
}

let d = main(second_main, 1,2,3,4,5,6,7,8,9);
console.log(d)