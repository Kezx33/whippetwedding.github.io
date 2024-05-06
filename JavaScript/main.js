
document.addEventListener("DOMContentLoaded", function(event) { 
 /* Set variables*/

var daysE1 = document.getElementById('days')
var hoursE1 = document.getElementById('hours')
var minutesE1 = document.getElementById('minutes')
var secondsE1 = document.getElementById('seconds')

/*Define function*/

function CountDownTimer(){
    const CountDownDate = new Date('08/31/2024 14:00').getTime()


    //convert to milliseconds
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour *24

    //Every second
    const interval = setInterval(() => {
        //current date
        const now = new Date().getTime()
        const distance = CountDownDate - now

        daysE1.innerText = formatNumber(Math.floor(distance / day))
        hoursE1.innerText = formatNumber(Math.floor((distance % day) / hour))
        minutesE1.innerText = formatNumber(Math.floor((distance % hour) / minute))
        secondsE1.innerText = formatNumber(Math.floor((distance % minute) / second))

    }, 1000);

}

// Add 0 if number is small then 10...8 --> 08
function formatNumber(number){
    if (number < 10) {
        return '0' + number
    }

    return number
}

//Run Function
CountDownTimer()

  });