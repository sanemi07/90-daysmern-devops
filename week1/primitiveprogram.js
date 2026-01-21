function greet(firstname){
    console.log(`hello there ${firstname}`)
}
bname="arjun"

greet(bname)
function greetGender(gender){
    if(gender==="male"){
         console.log(`hello there male`)
    }else if(gender==="female"){
  console.log(`hello there female`)}
 else{
    console.log(`specify gendar`)
 }
}
greetGender()
 function countToThousand(){
    for( let i=0;i<=1000;i++){
        console.log(i)
    }
 }
 countToThousand()