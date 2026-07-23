const promise = new Promise((resolve, reject) =>{
    check = true

    if(check){
        resolve("성공")
    }else{
        reject("실패")
    }
})

// 성공
// promise
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.error(err)
//     })

    console.log(promise)