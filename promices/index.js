// let promices = new Promise((resolve, reject) => {

// reject()
// // resolve()

// })
// promices.then(() => {
// console.log("done")
// })
// .catch(() => {
// console.log("error")
// })
// console.log(promices)




function step1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("selected ")
            resolve()
        }, 6000)
    })
}
        
function step2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("captions")
            resolve()
        }, 5000)
    })
}
async    function main(){
    await step1()
    await step2()
}
main()




// API CALLING


