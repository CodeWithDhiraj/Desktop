
// ********** MEMORY TYPE STACK AND HEAP IN JAVASCRIPT *************
//stack is for pritimive datatype
//heap is for non-pritimive/reference datatype


let userOne ={
    userName : "dhiraj",
    password : "dhirsjdnc@"
}

let uesrTwo = userOne
uesrTwo.userName ="kiran"
// console.log(uesrTwo);   
// console.log(userOne);

//string

const firstString = "     Thid is my first string"
const noFoDays = 40
// console.log(`My ${firstString} ${noFoDays}`);
// console.log(firstString.length);
// console.log(firstString.trim());
// console.log(firstString.replace('Thid', 'This'));


// console.log(Math.random()+1);


// console.log(Date(indexedDB));
// const myDate = new Date()
// console.log(myDate.getFullYear());


const Arry1 =["suraj","bishal"]
// console.log(Arry1);
const Arry2 =["sudhir","ranjan"]
// console.log(Arry2);



// console.log(newArry);

const mixArry = [1,2,[3,4],5,[6,7],8]
const newMixArry = mixArry.flat(Infinity)
// console.log(newMixArry);
const sym = Symbol("key1")

const jsuser = {
    name : "dhiraj",
    class : 12,
    age : 18,
    [sym] : "dddd",
}
jsuser.greeting = function(){
    console.log(`hello JS user ${this.name}`);
}
// console.log(jsuser.greeting());
// console.log(typeof jsuser.name)
// console.log(jsuser[sym]);
// 

const obj ={
    name : "dhiraj",
    friendsName :{
        name : "suraj",
        class: 12,
        age: 20
    },
    class : 12,
    age: 19
}
obj.friendsName.roll = 2901
console.log(obj.friendsName);




