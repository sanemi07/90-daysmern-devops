//  wap to print all even numbers in an array
const numArr=[1,2,3,4,5,6,7,8,9,10];
 function printEvenNumbers(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            console.log(arr[i])
        }
    }
 }
 printEvenNumbers(numArr)

 //wap to print biggest num in an array
 function printBiggest(arr){
    let count=0
 for(let i=0;i<arr.length;i++){
    if(arr[i]>count){
        count=arr[i]
    }
        
    }
    console.log(count)
 }
 printBiggest(numArr)

