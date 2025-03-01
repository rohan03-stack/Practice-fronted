// let arr = [20, 10, 30, 50, 70, 50];
// let arr2 = ["hgffjg", "frytrytr"]
// console.log(arr.length);
// console.log(arr.sort());
// console.log(arr.toString());



//  console.log(arr.pop());
//  console.log(arr)

// console.log(arr.push(100))
// console.log(arr)

// console.log(arr.splice(1,3))
// console.log(arr)

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.unshift(780));
// console.log(arr);

// console.log(arr.concat(arr2));


// 


// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sum = array1.reduce((accumulator, currentvalue) => accumulator + currentvalue, initialValue);
// console.log(sum);


let array = ["apple", "banana", "carrot", "apple","banana", "apple", "banana"]

const createObj = array.reduce((key,value) => {
    key[value] = (key[value] || 0) +1 
    return key
}, {})
console.log(createObj);






 
 









