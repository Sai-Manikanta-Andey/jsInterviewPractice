const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
let objCount ={}
 const arr = input.flat().map((eachChar)=>{
    if(objCount[eachChar]){
        objCount[eachChar] +=1 
    }
    else{
        objCount[eachChar]=1
    }
    return objCount
})
console.log(objCount);