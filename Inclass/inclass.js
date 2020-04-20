function calculateNumber(number, calculateFn) {
    return calculateFn(number)
}

const result1 = calculateNumber(5, number => number + 1);
const result2 = calculateNumber(5, number => number / 2);
const result3 = calculateNumber(5, number => number * number)
const result4 = calculateNumber(5, number => number ** 3)
const result5 = calculateNumber(5, number => (number -1) ** 2)
const result6 = calculateNumber(5, number => [number])
const result7 = calculateNumber(5, number => [number, number + 1, number + 2])
const result8 = calculateNumber(5, number => [number - 1, number , number + 1])
const result9 = calculateNumber(5, number => {
    let arr = []
    for (let i = 1; i <= number; i++) {
        arr.push(i)
    }
    return arr
})
const result10 = calculateNumber(5, number => {
    let arr = []
    for (let i =  number; i >= 1; i--) {
        arr.push(i)
    }
    return arr
})

function generateToArray(number, limit, step, callbackFn) {
    return callbackFn(number, limit, step)
}

// const result11 = generateToArray(5, 3, (number, limit) => {
//     let arr = []
//     for (let i = number; i <= number + limit - 1; i++) {
//         arr.push(i)
//     }
//     return arr
// })

const result12 = generateToArray(5, 5, 3, (number, limit, step) => {
    let arr = []
    for (let i = number; i < number + (limit * step); i+= step) {
        arr.push(i)
    }
    return arr
})

// console.log(result12)

function map(array, callbackFn) {
    let current = []
    for(let i = 0; i < array.length; i++) {
        current.push(callbackFn(array[i]))
    }
    return current
}

let array = [1, 2, 3, 4, 5]
let newArray1 = map(array, item => item * 2)

function filter(array, filterFn){
    let current = []
    for (let i = 0; i < array.length; i++) {
        if(filterFn(array[i])) {
            current.push(array[i])
        }
    }gi
    return current
}

let array2 = [
    {id:1, name: 'sonter'},
    {id:2, name: 'x'},
    {id:3, name: 'tong'}
]

let filterArray = filter(array2, ele => ele.id % 2 === 1)

function find(array, conditionFn) {
    let current = [];
    for (let i = 0; i < array.length; i++) {
        if(conditionFn(array[i])) {
            current.push(array[i])
        }
    }
    return current
}

const targetElement = find(array2, element => element.id === 2)

console.log(targetElement)