//hof->higher order function

//map,,,foreach.....filter...reduce...

const arr = [10,20,30,40]
// console.log(arr)

//foreach
arr.forEach((item)=>{
  console.log(item)
})
console.log(arr)

//map
arr.map((item)=>{
    console.log(item+10)
})
//filter
const filtedData=arr.filter((item)=>item>20)
console.log(filtedData)
console.log(arr)

//
const productName = ['abc','iphone',"mac",'window']
// const filter =productName.includes('abc')
const productFilter = productName.includes('abc')
console.log(productFilter)

//reduce

const reduced = arr.reduce((a,b)=>{
    return a+b
}
)
console.log(reduced)