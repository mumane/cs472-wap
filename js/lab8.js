//Question 6
const count={ 
    counter:0, 
    add : function(){ 
    	return this.counter+=1; 
	}, 
    reset: function(){ 
    	return this.counter=0; 
	} 
}; 
console.log("--------------NO 6 Solution-----------------")
console.log("count add:" + count.add()); 
console.log("count reset: " + count.reset());

//Question 8
function make_adder (inc){ 
    return ()=>count.counter+=inc; 
} 
const add5=make_adder(5); 
const add7=make_adder(7); 

console.log("--------------NO 8 Solution--------------")
console.log(add5());//5 
console.log(add5());//10 
console.log(add5());//15 
console.log("count reset: " + count.reset());
console.log(add7());//7 
console.log(add7());//14 
console.log(add7());//21 

//Question 10
const employee=(function(){ 
    let name; 
    let age; 
    let salary; 
    const  getAge=function(){ 
        return age; 
    } 
    const getSalary=function(){ 
        return salary; 
    }  
    const getName=function(){ 
        return name; 
    }
    const setSalarys=(newSalary)=> salary=newSalary; 
    const increaseSalary=function(percentage){ 
        const sal=getSalary()*(1+percentage/100);
        setSalary(sal); 
    } 
    const incrementAge=function(){ 
        return getAge()+1; 
    } 
    return { 
        setAge:function(newAge){ 
                        age=newAge; 
                        }, 
        setSalary:setSalarys,  
        setName:function(newName){ 
                        name=newName; 
                     }       
    } 
  })(); 
  
console.log("--------------NO 10 Solution--------------")

let emp=employee;
emp.setName("Emp Name");
emp.setAge(26);
emp.setSalary(5000);
console.log(emp);

//Question 11
let address;
employee.address=address;
employee.setAddress=function(newAddress){
	address=newAddress;
}
employee.getAddress=function(){
	return address;
}
let emp2=employee;
emp2.setAddress("fairfield");
console.log("--------------NO 11 Solution--------------")
console.log(emp2);
console.log(emp2.getAddress());//fairfield