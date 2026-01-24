/* counter function to count down from 30 to 0
function counter(){
    let num=30;
    
    return function (){
        if(num>=0){
            console.log(num)
            num--;
        }
    }

}
const setCount=counter()
setInterval(setCount,1*1000)*/

// terminal clock 

function clock() {
    let hour = 0;
    let minute = 0;
    let second = 0;

    const showClock = time(hour, minute, second);
    setInterval(showClock, 1000);
}

clock();

function time(hours, minutes, seconds) {
    return function () {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        if (hours === 24) {
            hours = 0;
        }

        // formatting (always 2 digits)
        const h = String(hours).padStart(2, '0');
        const m = String(minutes).padStart(2, '0');
        const s = String(seconds).padStart(2, '0');

        console.log(`${h}:${m}:${s}`);
    };
}
