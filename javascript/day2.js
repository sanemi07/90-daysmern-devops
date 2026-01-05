// closure counter example lab 1
function createCounter(  count ){
    
    function increment(){
        count++
        console.log("Count",count)
    }
    function decrement(){
        count--
        console.log("Count",count)
    }
    function reset(){
        count=0
        console.log("Count",count)
    }
    return {
        increment,
        decrement,
        reset
    }
}
let counter =createCounter(5)
counter.increment() // Count 6
counter.increment() // Count 7
counter.decrement() // Count 6
counter.reset()     // Count 0

//  lab 2 private api key 
function createConfig(){
    const apikey="jbaisfbeiufb"
    return{ getKey(){
        return apikey

    }}
}
const config = createConfig()
console.log("API Key:",config.getKey())
console.log("API Key:",config.apikey) 


// lab 3  function factory 
function multiplier(factor){
    return function(number){
        return number * factor
    }
}
const double= multiplier(2)
const triple= multiplier(3)
console.log(double(5)) // 10
console.log(triple(5)) // 15




