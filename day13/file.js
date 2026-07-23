// require : 모듈
const file = require("fs")

const user = new Object()
user.name = "김영채"
user.id = "kyc"
user.password = "1234"

// JSON으로 바꾸자

// Object -> JSON
const userJSON = JSON.stringify(user)
// JSON -> Object
const parseUser = JSON.parse(userJSON)
// console.log(parseUser)

// .writeFile("경로", "내용", "인코딩방식", "콜백함수")
// file.writeFile("kyc.json", userJSON, "utf-8", (error) =>{
//     if(error){
//         console.error(error)
//     }else{
//         console.log("파일 출력 성공!")
//     }
// })

// .readFile("경로", "인코딩방식", "콜백함수")
const kyc = file.readFileSync("./kyc.json", "utf-8")

// new Object()
// JSON -> Object(자바스크립트의 모든 타입)
console.log(JSON.parse(kyc))
console.log(JSON.parse("[1, 2, 3, 4]"))
console.log(JSON.parse("true"))