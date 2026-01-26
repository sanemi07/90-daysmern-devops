import fs from fs

async function read(){
    await fs.readFile("/random.txt",utf8,(err,data)=>{
        if(err){
            console.log(err)
            return err
        }
        console.log(data)
    })
}
console.log("start")
read()
console.log("end")