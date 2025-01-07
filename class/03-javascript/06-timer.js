let isStarted=false;

let auth=(target)=> {

    if(isStarted === false) {
        //타이머 작동 중이지 않을 때
        isStarted=true
        document.getElementById("button").disabled = false
        const token = String (Math.floor(Math.random()*1000000)).padStart(6,"0")
         document.getElementById("target").innerText = token
         document.getElementById("target").style.color = "#"+token;
    
         
        let time= 10
        let timer
    
        timer = setInterval(function () {

            if(time>=0) {
                let min = Math.floor(time/60)
                let sec = String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText = min+":"+sec
                time = time-1
            }else{
                document.getElementById("button").disabled = true;
                isStarted =false
                clearInterval(timer)
            }

        },1000)
    }else{
        //타이머 작동 중
    }

 }
