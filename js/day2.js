
//1.function in js
function additon (a,b,c=20){
    const sum = a+b+c
    console.log(sum)
}

additon(2,3,10)
additon(30,40)
additon(10,20)

function div(a,b){
    const div = a/b
    if(div==Infinity){
     console.log("value is infinity")
     
    }
    console.log("this is output",div)
}
div(1,0)


//arrow function
const add =(a,b)=>{
    const sum = a+b
    console.log(sum)
}
add(30,30)



//array and objects


const name1 = "hello"
const name2 = "abc"
const name3="xyz"


//array 
const arr = [{
    name:"abc",
    phone:379273,
},{
    name:"xyz",
    phone:379273,
},{
    name:"rrr",
    phone:379273,
}]

// console.log(arr[0])


//objects
const student = {
    name:"hello",
    phone:379273,
    address:"itahari"
}

//object destructuring
const{name}=student

console.log(name)



//array method

const arr1 = [10,20,30,40]
console.log(arr1)
arr1.pop()
console.log(arr1)
arr1.push(50)
console.log(arr1)
arr1.shift()
console.log(arr1)
arr1.unshift(10)
console.log(arr1)

//loop
// for( i =10;i>=0;i--){
//     console.log(`you have run the loop ${i} times`)
// }









