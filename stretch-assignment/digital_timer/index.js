let seconds=0;
let minutes=0;
let hours=0;




// stopwatch code here
function stopWatch(){
    seconds++;

    // SECOND NUMBER RESET // NOT REALLY NEEDED SINCE TIMER STOPS AT 0
    if (seconds/60===1){
        seconds=0;
        minutes++;
        // MIN NUMBER RESET // NOT REALLY NEEDED SINCE TIMER STOPS AT 0
        if(minutes/60===1){
            minutes =0;    //resets mins to 0
            hours++;    // increment hour by 1
        }
    }
    // AT 10 SECONDS SET COLOR OF DIGITS TO RED
    if(seconds ===10){
        let redColor= document.getElementById("digits");
        redColor.style.color="red"
    }
    // SECONDS RESET AT 10
    if(seconds===11){     
        seconds=0;
        // AT 0 SECONDS SET COLOR BACK TO BLACK( there's probably a better way to do this but idk)
        let redColor= document.getElementById("digits");
        redColor.style.color="black"
        
    }

    // display timer which will update 
document.getElementById("digits").innerHTML= hours + ":"+ minutes + ":"+ seconds;
}

window.setInterval(stopWatch, 1000)