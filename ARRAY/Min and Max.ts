let arr:number[]=[1,2,3,4,5,6];

let max:number = arr[0];
let min:number = arr[0];

for(let i = 1 ; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }

    else if(arr[i]<min){
        min = arr[i];
    }
}

console.log("Max", max);
console.log("Min", min);