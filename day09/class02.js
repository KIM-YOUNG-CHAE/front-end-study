// 클래스 실습
// 은행 클래스
// 프로퍼티(이름, 규모, 인원)
// 3개를 객체화
class Bank{
    // 초기화 생성자
    constructor(name, scale, number){
        this.name = name
        this.scale = scale
        this.number = number
    }

    introduce = () => {
        console.log(this.name)
    }
}

const kb = new Bank("국민", 1000, 60)
kb.introduce()
const sh = new Bank("신한", 1000, 30)
sh.introduce()
const nh = new Bank("농협", 2000, 15)
nh.introduce()