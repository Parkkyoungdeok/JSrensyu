// const a = 221;　// ㅂㅏ뀔수 없는 상수 그래서 밑에서 a를 재설정하면 오류 발생

// let b = a -5;  // 바꿔도 된다면 let 으로 선언 !
// //a = 4
// console.log(b , a);

// const what = "Nicolas";
// console.log(what);

//Boolean  true = 1 , false = 0

//number = 10  //  float = 5.1;

//Camel Case =>> 변수의 시작은 소문자 스페이스가 들어가면 대문자 하나 >> 이게 규칙.

/*const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
console.log(mon, tue, wed, thu, fri);*/  // Array 로 묶어보자
/*const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);*/

//object 는 array랑 다르게  각 value에 이름을 줄 수 있음
//브라켓 []  컬리브라켓{}    object는 컬리브라켓
// const nicoInfo = {
//     name:"Nico",
//     age:33,
//     gender:"Male",
//     isHandsome:true,
//     favMovies: ["Along the gods","LOTR","Oldboy"],  // object안에 array넣어도 됨 ~
//     favFood: [
//         {name: "Kimchi" , fatty: false},
//         {name:"Cheese burger" , fatty: true}         // << 이런식으로 넣어도 된다 ~ object안에 Array 안에 object ~~
//     ]
// }

// console.log(nicoInfo.gender); // male
// nicoInfo.gender = "Female"; // female 로 바꿈
// console.log(nicoInfo.gender);//female  // 콘솔로그 하는거 잊지말고 에러나면 꼭 읽어봐라 거기에 답이 있다.
// console.log(nicoInfo.favFood[0].fatty) //이런식으로 가능 여러가지 겹쳤을때

// function sayHello(name, age){
//     console.log('hello!', name, " you have ", age , "yeas of age."); // Hello! Nicolas you have 15 years of age.　가 출력된다.
// }
// sayHello("Nicolas"); // Hello! Nicolas 춮력
// console.log("Hi!");

// sayHello("Nicolas", 15);

// function sayHello2(name, age){
// console.log(`Hello ${name} you are ${age} years old`);
// }
// const greetNicolas = sayHello2("Nicolas", 14);

// console.log(greetNicolas); // >> undefined ?? 왜?? >> 위에 function 의 console.log를 return으로 바꾸면 제대로 실행된다.

//console.log ==>> object=객체 다.
//새로운 객체를 만들어보자 object

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multi: function(a, b){
        return a * b;
    },
    devide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
    
}

//console.log(greetNicolas)
const plus = calculator.plus(10, 5);
const minus = calculator.minus(10, 5);
const multi = calculator.multi(10, 5);
const devide = calculator.devide(10, 5);
const power = calculator.power(10, 5);

console.log(plus, minus, multi, devide, power);
