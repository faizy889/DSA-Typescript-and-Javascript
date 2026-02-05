let arr1: number[] = [5, 2, 9, 1, 7];
let start:number  = 0;
let end:number = arr.length-1;

while(start<end){
    let temp:number = arr[start];

    arr[start]= arr[end];
    arr[end]= temp;

    start++;
    end--;
}

console.log("Reversed Array" , arr1);