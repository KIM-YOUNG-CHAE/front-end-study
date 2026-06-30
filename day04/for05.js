// for문 심화
// 구구단

// for(let i = 0; i < 8; i++){
//     let dan = i + 2;

//     for(let j = 0; j < 9; j++){
//         let val = j + 1;
//         console.log(`${dan} X ${val} = ${dan * val}`)
//     }
// }

// 레거시 별찍기(과제)
//     *
//    ***
//   *****
//  *******
// *********


// 1부터 9까지의 숫자 중 짝수는 제외되어야함
// 1, 3, 5, 7, 9가 남는데 이를 문자열로 바꿔야함

let rows = 5; 

for (let i = 0; i < rows; i++) {
    let line = ""; 

    for (let j = 0; j < rows - i - 1; j++) {
        line = line + " ";
    }

    for (let k = 0; k < (2 * i + 1); k++) {
        line = line + "*";
    }
    
    console.log(line);
}

