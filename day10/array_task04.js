// 1) 1~10까지 / 누적합 구하기
const arr1 = new Array(10).fill(0).map(function(_, i){
    return i + 1
})
const arr1Result = arr1.reduce((acc, data, i, arr) => {
    return acc + data
}, 0)
// console.log(arr1)
// console.log(arr1Result)

// 2) 1~50까지 / 짝수만 배열에 담고 / 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
const arr2 = new Array(50).fill(0).map((_, i) => i + 1)
const arr2Even = arr2.filter((data) => !(data%2))
const arr2EvenResult = arr2Even.map((data) => data * 3)

// console.log(arr2)
// console.log(arr2Even)
// console.log(arr2EvenResult)

// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
const arr3 = new Array(10, 20, 30, 40, 50)
arr3.sort((a, b) => b - a)
// console.log(arr3)

// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
const arr4 = new Array(10).fill(0).map((_, i) => i + 1)
const arr4Result = arr4.map((data) => data > 5 ? data*2 : data)

// console.log(arr4)
// console.log(arr4Result)

// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
const arr5 = new Array(30).fill(0).map((_, i) => i + 1)
const arr5Result = arr5.map((data) => data % 2 ? data + "*" : data)

// console.log(arr5)
// console.log(arr5Result)


// 6) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력
const arr6 = new Array(20).fill(0).map((_, i) => i+1)
console.log(arr6)

arr6.sort((a, b) => b - a)
console.log(arr6)

const arr6Last5 = arr6.slice(0, 5)
const arr6Result = arr6Last5.reduce((acc, data) => acc + data)

console.log(arr6Last5)
console.log(arr6Result)