// 10분
// 학생의 3명의 이름, 학번, 국어 점수, 수학 점수, 영어 점수를 객체화 시 초기화 시키고
// 학생의 총점과 평균을 출력해주는 프로토타입을 구현하기
function Student(name, id, kor, math, eng){
    this.name = name
    this.id = id
    this.kor = kor
    this.math = math
    this.eng = eng
    this.total = kor + math + eng
    this.average = this.total / 3
    this.printScore = () => {
        console.log(`총 점: ${this.total}점, 평 균: ${this.average}`)
    }
}

const student1 = new Student("홍길동", 1, 50, 30, 20)
const student2 = new Student("장보고", 1, 60, 70, 80)
student1.printScore()
student2.printScore()

// 정수 메서드
// .toFixed(자리수)
// console.log(10.3333333.toFixed(2))