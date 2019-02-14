const fs = require("fs")
const path = require("path")

function ReadFilePromise() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, "./files/1.txt"), "utf8", (err, data) => {
            if (err) return reject()
            resolve()
        })
    })
}

ReadFilePromise().then((res)=>{
  console.log("读取文件成功")
},(err)=>{
  console.log("读取文件失败")
})