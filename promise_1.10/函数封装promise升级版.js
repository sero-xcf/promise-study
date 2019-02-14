const fs = require("fs")
const path = require("path")

function ReadFilePromise(name) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, `./files/${name}`),"utf8", (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

ReadFilePromise("1.txt").then((res) => {
    console.log(res)
    return ReadFilePromise("2.txt")
}).then((res)=>{
    console.log(res)
    return ReadFilePromise("3.txt")
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})