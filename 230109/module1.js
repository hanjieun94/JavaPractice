export default function test(){
    console.log("module test");
}

export function test1(){
    console.log("module1 test1");
}

export function test2(){
    console.log("module1 test2");
}

export class Exam{
    constructor(){
        this.kor = 3;
        this.eng = 3;
        this.math = 2;
    }
}

export let exam2 = new Exam();