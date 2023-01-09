
import aaa,{test1,test2,Exam,exam2} from './module1.js'
import bbb,{test1 as test3}  from './module2.js'
aaa();      //default
console.log(exam2);
test1();
test2();

//-----
bbb();
//test1();  Identifier 'test1' has already been declared
test3();

//-----
let exam1 = new Exam();
console.log(exam1);
