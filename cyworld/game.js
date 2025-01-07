const startWord =() => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText

    let lastword = word[word.length-1]
    let firstword = myword[0]

    if(firstword === lastword){
        //정답
        document.getElementById("result").innerText = "정답 !"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    }else{
        //오답
        document.getElementById("result").innerText = "땡 !"
        document.getElementById("myword").value = ""
    }
}