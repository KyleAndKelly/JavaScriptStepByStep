
//1.test input and output

document.write("Hello World")
alert("Hello World")
console.log("Hello World")

//2. test variable
let v1_1 = 1//number
console.log(v1_1)
let v1_2 = 1.34//number
console.log(v1_2.toFixed(1))

let v2 = "test2"//string
console.log(v2)
let v3 = 'test3'//string
console.log(v3)
let v4 = `test4`//string
console.log(v4)
console.log(v3+v4)
console.log(`Hello${v4}World`)
let v5 = true//boolean
console.log(v5)

let v6 //undefined
console.log(v2)
let v7= null//null
console.log(v3)

let v8 = {name:"kyle",id: 1}//object
console.log(v8)
let v9 = new Date()//data
console.log(v9)

let v10 = [1, 2, 3]//array
console.log(v10)

let v11 = new Array(4,5,6)//array
v11.push(7)
console.log(v11)

console.log(typeof v11)//typeof
console.log(Number(v1_2))//Number
console.log(parseInt(v1_2))//parseInt


let [v12, v13, v14] = [7, 8, 9]
console.log(v12)
console.log(v13)
console.log(v14)
;[v13, v14] = [v14, v13]
console.log(v13);
console.log(v14); 

let v15 ={name:'n',id: 5}
let {name,id} = v15
console.log(name)
console.log(id)

//3. test const
const v16 = 10
// v16 = 454 //error out!
console.log(v16)

const v17 = [4,5,6]
v17.push(7)//no error!
console.log(v17)

const v18 = {name:`tom` , id:7}
v18.id = 19
console.log(v18)


//4.test function
function testFunc1(){
    console.log("testFunc1: HelloWorld")
}
testFunc1()

function testFunc2(num1=0, num2=4){
    console.log("testFunc2:"+num1+num2)
}
testFunc2()
testFunc2(1,2)

function testFunc3(num1=0, num2=4){
    return num1+num2
}
let v19 = testFunc3(2,3)
console.log(v19)

let fn1 = function(){
    console.log("test  lambda fn1")
};
fn1();

let fn2 = () =>{
    console.log("test  lambda fn2")
};
fn2();

let fn3 = x =>{
    console.log("test  lambda fn3:" + x)
};
fn3(5);

let fn4 = (x,y) =>{
    console.log("test  lambda fn4:" + Number(x+y))
};
fn4(5,6);

let fn5 = (x,y) =>x+y
console.log("test  lambda fn5:"+fn5(5,6));


let fn6 = (...nums) =>{
    let sum=0;
    for(let i =0;i<nums.length;i++){
        sum += nums[i]
    }
    return sum
}
console.log("test  lambda fn6:"+fn6(5,6,7));



(function(){console.log("test lambda func2 ")})();

function sum1(){
    console.log("now in sum1")
    let s = 0
    for(let i=0;i<arguments.length;i++){
        s += arguments[i]
    }
    console.log(s)
}

sum1(2,3,4)
sum1(1,2)


function sum2(...args){
    console.log("now in sum2")
    let s = 0
    for(let i=0;i<args.length;i++){
        s += args[i]
    }
    console.log(s)
}
sum2(2,3,4)
sum2(1,2)

function sum3(group, ...nums){
    console.log("now in sum3,data group:"+ group)
    let s = 0
    for(let i=0;i<nums.length;i++){
        s += nums[i]
    }
    console.log(s)
}
sum3("google",2,3,4)
sum3("meta",1,2)



//5.test object
let obj1 = {
    name:"lisa",
    age:23,
    printInfo:function(){
        console.log(this.name+" "+ this.age)
    }
}
let obj2 = new Object({
    name : "kelly",
    age:12,
    printInfo:function(){
        console.log(this.name+" "+ this.age)
    }
})
console.log(obj1.name+" "+obj1.age)
console.log(obj2['name']+" "+obj2['age'])
obj2.printInfo()
for(let k in obj1){
    console.log(k)
    console.log(obj1[k])
}

obj2.age = 56
console.log(obj2.age)
let objDeepClone = _.cloneDeep(obj2)
console.log(objDeepClone)

function MyConstructor(name, age){
    this.name = name 
    this.age = age
    this.printInfo = function(){
        console.log(this.name+" "+ this.age)
    }
}
MyConstructor.type = "human"
MyConstructor.sayHi = function(){
    console.log("hello")
}
let obj3 = new MyConstructor("nic", 23)
console.log(obj3)

let obj4 = new MyConstructor()
console.log(obj4)
console.log(MyConstructor.type)
MyConstructor.sayHi()


function People(name, age){
    this.name = name
    this.age = age
    this.eat = function(){}
    this.walk = function(){}
}

function Man(){}
Man.prototype = new People
Man.prototype.constructor = Man
Man.prototype.smoking = function(){}
let m1 = new Man()
console.log(m1)

function Women(){}
Women.prototype = new People
Women.prototype.constructor = Women
Women.prototype.baby = function(){}
let w1 = new Women()
console.log(w1)
















