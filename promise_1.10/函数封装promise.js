function promiseText(){
    var promise =new Promise((resolve,reject)=>{
        var flag =false
        if(flag) return resolve()
        reject()
    })
    return promise
}

promiseText().then((res)=>{
    var a ="成功回调"
    console.log(a)
},(err)=>{
    var b ="失败回调"
    console.log(b)
})