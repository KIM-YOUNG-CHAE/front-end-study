// 심화 실습
// 1번 문제: 0~10까지 5만 빼고 출력
// for(let i = 0; i <= 10; i++){
//     if(i === 5){ continue; }
//     console.log(i)
// }

// 2번 문제: 012340123401234 출력
let result2 = "";
// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 5; j++){
//         result2 += j
//     }
// }

// console.log(result2)
// for(let i = 0; i < 15; i++){
//     result2 += i % 5
// }
// console.log(result2)


// 3번 문제: 1~10까지 제곱값 구하기
// for(let i = 0; i < 10; i++){
//     let num = i + 1
//     console.log(num * num)
// }

// 4번 문제: 1~100까지 7의 배수의 개수 세기
// let count = 0;
// for(let i = 0; i < 100; i++){
//     let num = i + 1
//     if(num % 7 === 0){
//         count++
//     }
// }

// console.log(count)

// 5번 문제: 1~5까지 반복후 아래 결과 만들기 
// false, true, false, true, false
// for(let i = 0; i < 5; i++){
//     let num = i + 1;
//     console.log(!(num % 2))
// }

// 6번 문제 1~5까지 반복후 아래 결과 만들기
// "00001"
let result6 = "";
for(let i = 0; i < 5; i++){
    let num = i + 1
    result6 += num === 5 ? 1 : 0
}

console.log(result6)


// 7번 문제: 1~20중 10~15를 제외하고 출력하기
// 8번 문제: 1~100까지 홀수만 더한 값과, 짝수만 더한 값의 차를 구하여 출력하기
// 9번 문제: 1~10까지의 총합을 출력하시오