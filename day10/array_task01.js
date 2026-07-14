// 1) 0~10까지 들어가있는 배열을 생성하기 
// 단 [0, 1, 2, 3] 손으로 쓰지 말고 메서드를 사용할 것
// 2) 그 해당 배열의 값을 반대로 바꾸기 10~0
// 3) 그 배열의 모든 값을 5배 만들기

// 1
const arr1 = new Array(11).fill(0)
arr1.forEach(function(val, index, arr){
    arr1[index] = index
})
console.log(arr1)

// 2
const arr1Reverse = arr1.reverse()
console.log(arr1Reverse)

// 3
arr1Reverse.forEach(function(val, index, arr){
    arr[index] = arr[index] * 5
})
console.log(arr1Reverse)
