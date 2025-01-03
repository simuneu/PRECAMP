let persons =[
    {name:"철수", age:17},
    {name:"영희", age:22},
    {name:"도우너", age:65}
]
// undefined
for(let count =0; count <persons.length; count++){
    if(persons[count].age >=19) {
        console.log("성인입니다.")
    }else{
        console.log("미성년자입니다.")
    }
}
// VM85:5 미성년자입니다.
// 2VM85:3 성인입니다.
// undefined
for(let count =0; count <persons.length; count++){
    if(persons[count].age >=19) {
        console.log(persons[count].name+ "님은 성인입니다.")
    }else{
        console.log(persons[count].name+"님은 미성년자입니다.")
    }
}
// VM162:5 철수님은 미성년자입니다.
// VM162:3 영희님은 성인입니다.
// VM162:3 도우너님은 성인입니다.

//조건문 2
const fruits=[
    {number:1, title:"딸기"},
     {number:2, title:"사과"},
     {number:3, title:"배"},
     {number:4, title:"포도"},
     {number:5, title:"감"},
     {number:6, title:"귤"},
     {number:7, title:"용과"},
     {number:8, title:"리치"},
     {number:9, title:"수박"},
     {number:10, title:"복숭아"}
]
// undefined
for(let list = 0; list<10; list++) {
    console.log(fruits[list].number+" "+fruits[list].title)
}
// VM255:2 1 딸기
// VM255:2 2 사과
// VM255:2 3 배
// VM255:2 4 포도
// VM255:2 5 감
// VM255:2 6 귤
// VM255:2 7 용과
// VM255:2 8 리치
// VM255:2 9 수박
// VM255:2 10 복숭아

for(let list = 0; list<10; list++) {
    console.log(`${fruits[list].number} ${fruits[list].title}`)
}
// VM288:2 1 딸기
// VM288:2 2 사과
// VM288:2 3 배
// VM288:2 4 포도
// VM288:2 5 감
// VM288:2 6 귤
// VM288:2 7 용과
// VM288:2 8 리치
// VM288:2 9 수박
// VM288:2 10 복숭아