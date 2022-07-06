const marks=[90,92,94,99,100,44]

const arr = new Array(100).fill('').map((i,index)=>({
name:'Name '+index,
marks: marks[index%6],
id:index
}));




// 1 . Create a new Array updating marks by it square

const newArr1 = arr.map((i)=> {
    return {...i, marks: i.marks * i.marks};
})
//console.log(newArr1)





// 2.  Fetch first element with mark 44 with index

const foundItem = arr.find((i)=> {
 return i.marks === 44
  
})
//console.log(foundItem)




// 3.  Write a function which take a mark as parameter and fetch all items with same marks

let getSameMark=(marksPara,arr1)=>{
 return arr1.filter((val)=>{
 return val.marks==marksPara
 })
}
 var result=getSameMark(44,arr)

//console.log(result);



// 4. Findout items with marks equal to 100 and get last element of that array

const getMarks = arr.filter((item)=>{
  return item.marks == 100
})
//console.log(getMarks)
















