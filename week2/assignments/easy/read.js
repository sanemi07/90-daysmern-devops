import fs from 'fs'

 function read(){
     fs.readFile("random.txt",'utf8',(err,data)=>{
        if(err){
            console.log(err)
            return err
        }
        console.log(data)
    })
}
console.log("start")



let sum=0
while(sum<10000){
    sum+=sum
    console.log(sum)
    sum++
}
read()
console.log("end")