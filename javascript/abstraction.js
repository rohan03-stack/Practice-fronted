// class Employee{
//     constructor(name,salary)
//     {
//         this.name = name;
//         this.salary = salary;
//         const bonus = 5000;
//         this.totalSal=()=>{
//             this.total = this.salary + bonus
//             console.log(this.total);
            
//         }
//     }
//     totalSal(){
//         this.total = this.salary + bonus
//         console.log(this.total);
        
//     }
//     displaydet(){
//         console.log(this.name + this.salary);
        
//         }
// }
// const e = new Employee("rohan", 50000);
// e.displaydet();
// e.totalSal();


// ..................encapsulation.................

class students{
    constructor(){
        var name;
    }
    setName (name){
        this.name = name;
    }
    getName (){
        return this.name;
    }
}
const s = new students();
 console.log(s.setName = "abs");
    
console.log(s.getName());


