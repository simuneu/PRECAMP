const changeFocus1 = () => {
    let phone1 = document.getElementById("phoneNumber1").value
        if(phone1.length === 3) {
            document.getElementById("phoneNumber2").focus()
        }
}

const changeFocus2 = () => {
    let phone2 = document.getElementById("phoneNumber2").value
        if(phone2.length === 4) {
            document.getElementById("phoneNumber3").focus()
        }
}

const changeButton1 = () => {
    let phone3 = document.getElementById("phoneNumber3").value
    const button = document.getElementById("token__button")
        if(phone3.length === 4) {
            button.disabled=false
            button.style="color:#0068ff;"
            button.style.cursor = "pointer";
        }else{
            button.disabled = true;
            button.style="color:gray;"
            button.style.cursor="not-allowed"
        }
}

let isStarted= false 
let time = 120
let timer

let auth=()=>{
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("token").innerText = token

    if(isStarted) return
    isStarted =true
    time =5

    document.getElementById("token__timer__button").disabled = true

    timer = setInterval(() =>{
        if(time > 0) {
            let min = Math.floor(time/60)
            let sec = String(time%60).padStart(2,"0")
            document.getElementById("timer").innerText = min+":"+sec
            document.getElementById("token__timer__button").disabled=false
            document.getElementById("token__timer__button").style.cursor="pointer"
            time= time-1
        }else{
            clearInterval(timer)
            document.getElementById("timer").innerText = "0:00"
            document.getElementById("token__timer__button").disabled=true
            document.getElementById("token__timer__button").style.cursor="default"
            isStarted = false

        }
    },1000)

}

let authChk=()=>{
    if(isStarted) {
        alert("인증이 완료되었습니다.")
        clearInterval(timer)
        isStarted=false
        time=0
        document.getElementById("timer").innerText ="0:00"
        document.getElementById("token__timer__button").disabled = true
    }else{
        alert("인증시간이 초과되었습니다.")
    }
}
