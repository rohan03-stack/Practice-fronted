// const rohan = {
//   name: "abc",
//   age : 20
// }
// console.log(rohan);

const v = new Object();
v.name = "rohan";
v.age = 20;
v.rollno = 5;
v. isfeepaid =  true;

console.log(v);
console.log(v.name);


// ................function constructor object....................
function student(name, age){
  this.name = name
  this.age = age
}
const s = new student("rohan", 20);
console.log(s.name+""+s.age);

const t = new student("rohan", 20);
console.log(t.name+""+t.age);
const r = new student("rohan", 20);
console.log(r.name+""+r.age);




