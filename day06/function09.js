// 입력 받은 문자열을 뒤집어서 반환해주는 함수
// ex) "abcdefg" -> "gfedcba"
// .at(-1) 
// .at(-2) 


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

function changeKo(ko){
    switch(val){
        case 0:
            console.log("공")
            break;
        case 1:
            console.log("일")
            break;
        case 2:
            console.log("이")
            break;
        case 3:
            console.log("삼")
            break;
        case 4:
            console.log("사")
            break;
        case 5:
            console.log("오")
            break;
        case 6:
            console.log("육")
            break;
        case 7:
            console.log("칠")
            break;
        case 8:
            console.log("팔")
            break;
        case 9:
            console.log("구")
            break;
       
        
    }
}
let result2 = changeKo("일공이사")
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