let set = new Set([34,2,6,8,2,4,5,657,8,2,342]);

// set.add(5);
// set.add("5");
// set.add(2);
// set.add(5);
console.log(`size: ${set.size}`);
//console.log(set.size);


console.log("for-of=============");
//각각의 값을 뽑아내는 작업 
for(let n of set)   //---default
    console.log(n);

//각각의 값을 뽑아내는 작업 - set의 함수    
set.forEach((v)=>{
    console.log(`value: ${v}`);
})

console.log("for-in=============");
//키 값을 뽑아내기 위해선 for-in문

for(let k in set)
    console.log(k);

//키 = 값
set.forEach((v,k)=>{
    console.log(`key: ${k}, value: ${v}`);
})

//map------------------------------------------------------------------------
let map = new Map();
map.set("id", 1);
map.set("title", "map이란");

console.log("foreach----------------")
map.forEach((v,k)=>{
    console.log(`key: ${k}, value: ${v}`);
})

let notice = new Map();
notice.set("id", 1);
notice.set("title", "map is...");
notice.set("writer", "enw");

//각각
console.log(notice.get("title"));

//열거하여
for(let key of notice.keys())   
    console.log(`key: ${key}`);

for(let v of notice.values())  
    console.log(`values: ${v}`);

for(let [k,v] of notice.entries())  //"id",1
    console.log(`key: ${k}, value: ${v}`);

// for(let [,v] of notice.entries())  
// console.log(`key: , value: ${v}`);

//결과가 배열로
// for(let n of notice)  
//     console.log(`n: ${n}`);

for(let n of notice)  
    console.log(`n: ${n[0]}`);  //키

for(let n of notice)  
console.log(`n: ${n[1]}`); //값

//= = = = = = = = =
let exam3 = {
    kor:10,
    eng:20,
    math:30
};

for(let v of exam3) 
    console.log(v);

//for(let [k,v] of exam3)
//console.log(`key: ${k}, value: ${v}`);

for(let [k,v] of Object.entries(exam3))
    console.log(`key: ${k}, value: ${v}`);

let obj = Object.create(null);

// = == = = = = = = == == = = = = = = =
let list = [
 {id:1, title:" ...is", writerId:"bew"},
 {id:2, title:" ...is2", writerId:"bew"},
 {id:3, title:" ...is3", writerId:"bew"}
];

//list.forEach((n)=>{});  //데이터를 사용하기 위함
let ar = list.map((n)=>{return `<span>${n.title}</span>`});  //데이터를 변환하여 반환 가능
console.log(ar);