// 입력 받은 문자열을 뒤집어서 반환해주는 함수
// ex) "abcdefg" -> "gfedcba"
// .at(-1) 
// .at(-2) 

function reverseTxt(txt){
    let result = ""
    for(i=0;i<txt.length;i++){
        result = txt[i] + result
    }
    return result
}

let result1 = reverseTxt("abcdefg")
console.log(result1)

// const changeToInteger = (hangle) => {
//     let hangles = "공일이삼사오육칠팔구"
//     let result = ""
//     for(let i = 0; i < hangle.length; i++){
//         result += hangles.indexOf(hangle[i])
//     }

//     return result
// }

// let result1 = changeToInteger("일공이사")
// console.log(result1)



// 다이아(심화)
// 1. 한글을 정수로 바꿔주는 함수
// ex) "일공이사" -> 1024
// 알고리즘
// 1. 한글을 받는다 (매개변수)
// 2. "일공이사"
// 반복문으로 글자를 하나씩 쪼갠다 

// "일", "공", "이", "사"
// 3. 답 정 너 (답이 정해져 있을 때 사용하는 문법)
// if ~ else, OOO문법
// "공" -> 0
// "일" -> 1
// "이" -> 2
// "삼" -> 3
// "사" -> 4
// "오" -> 5
// "육" -> 6
// "칠" -> 7
// "팔" -> 8
// "구" -> 9

// 4. 누적합(연결)
// 5. 리턴
// 6. "문자열" + "문자열" -> 연결
// 7. "1024" -> 1024 형변환

function chageKo(ko){
    let result = ""
    for(i=0;i<ko.length;i++){
        let val = ko[i]
        let num = ""
        switch(val){
            case "공": num = "0"; break;
            case "일": num = "1"; break;
            case "이": num = "2"; break;
            case "삼": num = "3"; break;
            case "사": num = "4"; break;
            case "오": num = "5"; break;
            case "육": num = "6"; break;
            case "칠": num = "7"; break;
            case "팔": num = "8"; break;
            case "구": num = "9"; break;
            default : console.log("번호를 잘못 입력헀습니다"); break;
        }
        result += num
    }
    return Number(result)
}
let result2 = chageKo("일공이사")
console.log(result2)

// 2. 정수를 한글로 바꿔주는 함수
// ex) "1024" -> "일공이사"
// "0" -> "공"
// "1" -> "일"
// "2" -> "이"
// "3" -> "삼"
// "4" -> "사"
// "5" -> "오"
// "6" -> "육"
// "7" -> "칠"
// "8" -> "팔"
// "9" -> "구"

// 2. 정수를 한글로 바꿔주는 함수
// ex) "1024" -> "일공이사"

function chageNum(num){
    let result = ""
    let numSt = String(num)
    for(i=0;i<numSt.length;i++){
        let val = numSt[i]
        let num = ""
        switch(val){
            case "0": num = "공"; break;
            case "1": num = "일"; break;
            case "2": num = "이"; break;
            case "3": num = "삼"; break;
            case "4": num = "사"; break;
            case "5": num = "오"; break;
            case "6": num = "육"; break;
            case "7": num = "칠"; break;
            case "8": num = "팔"; break;
            case "9": num = "구"; break;
            default : console.log("번호를 잘못 입력헀습니다"); break;
        }
        result += num
    }
    return result
}
let result3 = chageNum(9876)
console.log(result3)


// const changeToHangle = (number) => {
//     let hangles = "공일이삼사오육칠팔구"
//     let result = ""
//     for(let i = 0; i < number.length; i++){
//         result += hangles[number[i]]
//     }
//     return result
// }

// let result2 = changeToHangle("1024")
// console.log(result2)