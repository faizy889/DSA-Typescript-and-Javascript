let expences = []

const PrintExpense=(arr)=>{
if(arr.length===0){
    return console.log("No Expenses Found")
}
else{
    console.log("Expenses List:")
    arr.forEach(exp => {
         console.log(`ID: ${exp.id} | ${exp.title} | Amount: ${exp.amount} | Category: ${exp.category} | Date: ${exp.date}`)
    });
}
}





let expencesId = 1;

const addexpense=(title , ammount , category  , date)=>{
 expences.push({
    id:expencesId = 1,
    title,
    ammount,
    category,
    date    
 })
 console.log(`Added Expence: ${title}| ${ammount}`)
}

const merge=(left , rigth , key)=>{
let result = [] , i , j
while(i<left.length && j<rigth.length){
    if(left[i][key]<=rigth[j][key]){
        result.push(left[i])
    i++;
    }
else if(left[i][key]>=rigth[j][key]){
    result.push(rigth[i])
    j++
}
}
return result.concat(left.slice(i)).concat(rigth.slice(j))
}

const mergesort=(arr,key)=>{
    if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0 , mid);
    let rigth = arr.slice(mid);
 return merge(mergesort(left , key) ,mergesort(rigth , key) )
}

const quicksort=(arr,key)=>{
if (arr.length<=1){ return arr }
let left = [ ] , right =[]
let pivot  = arr[arr.length-1]
for(let i = 0 ; i<arr.length-1; i++){
if(arr[i][key]<=pivot[key]) left.push(arr[i])
    else right.push(arr[i])

}
return [...quicksort(left,key),pivot , ...quicksort(right , key)]
}

function binarySearch(arr, date) {
  let left = 0, right = arr.length-1
  while (left <= right) {
    let mid = Math.floor((left+right)/2)
    if (arr[mid].date === date) return arr[mid]
    else if (arr[mid].date < date) left = mid+1
    else right = mid-1
  }
  return null
}

addexpense("Lunch", 500, "Food", "2026-02-01")
addexpense("Book", 1200, "Study", "2026-01-15")
addexpense("Internet", 3000, "Utility", "2026-02-05")
addexpense("Coffee", 300, "Food", "2026-01-10")

console.log("\n--- Original List ---")
PrintExpense(expences)


let sortedByDate = mergesort(expences, "date")
console.log("\n--- Sorted by Date ---")
PrintExpense(sortedByDate)


let sortedByAmount = quicksort(expences, "amount")
console.log("\n--- Sorted by Amount ---")
PrintExpense(sortedByAmount)


let searchDate = "2026-02-05"
let found = binarySearch(sortedByDate, searchDate)
console.log(`\nSearching expense on ${searchDate}:`)
if (found) console.log(found)
else console.log(" Not found")