let time = 10
setInterval(function () {
    if(time > -1){
        console.log(time)
        time = time-1
    }
},1000)

let time2 = 180

setInterval(function () {
    if(tim2e >=0){
        let min = Math.floor(time/60)
        let sec = String(time%60).padStart(2,"0")
        console.log(min+":"+sec)
        time2 = time2-1
    }
},1000)
