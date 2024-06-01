function NewGame() {
    window.location.reload();
}
let timer=null;
let [seconds,minutes,hours]=[0,0,0];
let displayTime = document.getElementById('Time');
function stopWatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
            
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;

displayTime.innerHTML=h+" : "+m+" : "+s;
}


function seting() {
    document.querySelector('.enter').style.display = 'block';
    document.querySelector('.but').style.display = 'block';
    document.getElementById('seting').style.display = 'none';
    document.getElementById('click').style.display = 'none';

if(timer!==null){
    clearInterval(timer);
}
timer=setInterval(stopWatch,1000);




}

let num;
function GeneratingNum() {
    let max = parseInt(document.getElementById('max').value);
    let nums = [];
    for (let i = 0; i < 4; i++) {
        do {
            num = Math.floor(Math.random() * max + 1);
        } while (nums.includes(num)) {
            nums.push(num);

        }

    }
    return nums;
}

let t = 0;
let numTry = 0;
function CheckNum() {
    numTry++;
    if (t == 0) {
        var nums1 = GeneratingNum();
        t = nums1;
    }

    console.log(t);
    let trueNum = 0;
    let num1 = t;

    let guess = Try();

    for (let i = 0; i < 4; i++) {
        if (num1.includes(guess[i])) {
            trueNum++;
        }
    }
    let result;
    if (trueNum <= 3) {
        result = "you guessed " + trueNum + " golden numbers";
    }
    else if (trueNum == 4) {
        result = "Congratulations..you have guessed 4 golden numbers,Number of guesses: " + numTry;
        document.getElementById('try').style.display = 'none';
        clearInterval(timer);
    }
    document.getElementById('r').innerHTML = result;
    

}

let trueNum = 0;
let guessNum, b;
function Try() {
    let guess = [];
    document.getElementById('rr').innerHTML ='';
    for (let i = 1; i <= 4; i++) {
        guessNum = 'g' + i;
        b = parseInt(document.getElementById(guessNum).value);
        if (guess.includes(b)) {
            
            document.getElementById('rr').innerHTML ='All guesses must be from different numbers';
            break;
        }
        guess.push(b);
    }
    return guess;
}
