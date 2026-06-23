// 1~20까지 숫자중 3의 배수만 출력
// continue 사용

for(let i = 0; i < 20; i++){
    let num = i + 1
    if(num % 3 === 0){
        console.log(num);
    }
}