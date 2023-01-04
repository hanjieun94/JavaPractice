//2진수 8진수 사용가능---------------------------------


//let-----------------------------
// console.log(x); //undefined
// var x = 3

// console.log(x); //변수 선언o, 초기화x ; 지역변수는 초기화 한 후 사용 가능
// let x = 3;


//상수형 변수; 코드를 문자화하고 싶을 때

let year = 2023;
let month = 1;
let day = 4;


//문자열을 템플릿으로--------------------------------------
let template = `${year}-${month}-${day}`;   //2023-1-4
console.log(template);

let className = 'p-elect';
let title = '스마트 폰';

// let product = `<section class="` + className + `">
//                 <h1>?</h1>
//                 </section>`;

// let product = `<section class="${className}">
//                 <h1>${title}</h1>
//                 </section>`;

// let product = `<section class="${className}">\n\n\n
//                 <h1>${title}</h1>
//                 </section>`;

let product = String.raw`<section class="${className}">\n\n\n
                <h1>${title}</h1>
                </section>`;


console.log(product);



//향상된 JSON객체 표현식------------------------------------

//let attName = "kor";

// let exam ={
//     [attName]: 10,
//     eng: 20,
//     math: 30
// }
// console.log(`kor:${exam.kor}`);

let attName = "kor";

// let exam ={
//     [attName]: 10,
//     eng: 20,
//     math: 30
// }
// console.log(`kor:${exam.kor}`);

//object destructuring---------------------------------
//객체 뽀개기, 변수명을 같게

// let {kor} = exam;
// let {eng} = exam;

// let {kor, eng:english} = exam  //kor은 exam의 kor을 담은 변수
//                                //english은 exam의 eng을 담은 변수
// console.log(kor);
// console.log(english);

//let {kor, eng:englis, ma=0} = exam 

//중첩된 객체 exam에서 뽀개기?

let exam = {
    [attName]: 10,  //컬럼명의 변수화 가능
    eng: 20,
    math: 30,
    student: {
        name: 'newlect',
        phone:'010-'
    }

}
// let {kor, eng:english, student:{name, phone}} = exam 
// console.log(name);

let {student} = exam; //객체를 뽑아냄
let {name, phone} = student;
console.log(student.name);
console.log(name);

