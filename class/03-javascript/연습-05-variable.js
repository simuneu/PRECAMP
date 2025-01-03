// 데이터 타입 연산자 실습
1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123"
// '123'
"123"==123
// true
"123"===123
// false
true&&true
// true
true||false
// true
false||false
// false
true||true
// true
!true
// false



// 조건문 1
if(1+1 === 2) {
    console.log("정답입니다.") 
} else {
    console.log("틀림!")
}
// VM392:2 정답입니다.
// undefined
if(true) {
    console.log("정답입니다.") 
} else {
    console.log("틀림!")
}
// VM419:2 정답입니다.
// undefined
if(!true) {
    console.log("정답입니다.") 
} else {
    console.log("틀림!")
}
// VM428:4 틀림!
// undefined
if(0) {
    console.log("정답입니다.") 
} else {
    console.log("틀림!")
}
// VM432:4 틀림!



//조건문2
const profile ={
    name :"철수",
    age:12,
    school :"다람쥐초등학교"
}

if (profile.age >= 20) {
    console.log("성인입니다.")
} else if(profile.age >8 && profile.age <=19) {
     console.log("학생입니다.") 
} else if (profile.age <= 7) {
     console.log("어린이입니다.") 
}
// VM962:4 학생입니다.

if (profile.age >=20) {
    console.log("성인입니다.")
} else if (profile.age >= 8) {
    console.log("학생입니다.")
} else if (profile.age <= 7){
    console.log("어린이입니다.")
} else {
    console.log("잘못 입력하셨습니다.")
}
// 학생입니다.
