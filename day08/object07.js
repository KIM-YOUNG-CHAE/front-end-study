// 얕은 복사
// 깊은 복사
const animal1  = {
    cat: "야옹이",
    dog: "누렁이",
    cow: "얼룩이",
    tiger: "어흥이"
}

const animal2 = animal1

// 얕은 복사
// console.log(animal1)
// console.log(animal2)

// 깊은 복사
const animal3 = Object.assign({}, animal1)
animal1.dog = "점박이"
console.log(animal1)
console.log(animal3)