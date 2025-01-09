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
    time =120

    timer = setInterval(() =>{
        let min = Math.floor(time/60)
        let sec = String(time%60).padStart(2,"0")
        document.getElementById("timer").innerText = min+":"+sec
        time= time-1

    if(timer <= 0) {
        clearInterval(timer)
        document.getElementById("token__timer__button").disabled=false
    }
},1000)

}
