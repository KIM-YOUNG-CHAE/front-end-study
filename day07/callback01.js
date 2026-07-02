// 어떤 값을 전달하면 값을 2배로 만들고 출력
const multiplyBy2 = (num, callback) =>{
   callback(num * 2)
}

multiplyBy2(20, console.log)

// 성과 이름을 더해서 출력해주는 함수
const printFullname = (lastName, firstName, callback) => {
    callback(lastName + firstName)
}

printFullname("홍", "길동", console.log)

// 두 수를 전달하고 두 수의 더한 값이 홀수인지 짝수인지 확인 후 출력
const numberChk = (num1, num2, callback) => {
    let result = num1 + num2
    if(result % 2 === 0){
        callback("짝수");
    }else{
        callback("홀수");
    }
}
numberChk(10, 21, console.log)