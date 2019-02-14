var promise =new Promise((resolve,reject)=>{
    var flag =false
    if(flag) return resolve()
    reject()
}).tnen((res)=>{
    var a ="成功回调"
    console.log(a)
},(err)=>{
    var b ="失败回调"
    console.log(b)
})

