const STOP_WATCH = document.getElementById('stop_watch');
const START = document.getElementById('start');
const STOP = document.getElementById('stop');
const CLEAR = document.getElementById('clear');

let hours = 0;
let minutes = 0;   
let seconds = 0;   
let tenthOfASecond = 0;


let stopWatch = () => {
    tenthOfASecond++;  
    if(tenthOfASecond % 10 === 0) {
       seconds++
       tenthOfASecond = 0;
    }
    if (seconds / 60 === 1) {   
        minutes++;  
        seconds = 0;   
    }
    if (minutes / 60 === 1){
        hours++;
        minutes = 0;
    }
   
    STOP_WATCH.innerHTML = (hours)+ ':' +(minutes) + ':' + (seconds) + ':'+(tenthOfASecond);
}


let interval; 
START.disabled = false;  
STOP.disabled = true;  
CLEAR.disabled = true;  


START.addEventListener('click' , () => {
    interval = setInterval(stopWatch, 100);    
    START.disabled = true;  
    STOP.disabled = false;  
    CLEAR.disabled = true;  
})


STOP.addEventListener('click' , () => {
    clearInterval(interval);    
    START.disabled = false;     
    STOP.disabled = true;       
    CLEAR.disabled = false;     
})



CLEAR.addEventListener('click' , () => {
    STOP_WATCH.innerHTML = '0:0:0:0';    
    tenthOfASecond = 0;
    minutes = 0;   
    seconds = 0;    
    hours = 0;
    START.disabled = false;    
    STOP.disabled = true;       
    CLEAR.disabled = true;   
})

