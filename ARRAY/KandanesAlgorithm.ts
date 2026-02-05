let num2:number[] = [-2,1,-3,4,-1,2,1,-5,4];

let maximum:number = num2[0];
let minimum:number =num2[0];

let currentnum:number = num2[0];

for(let i = 0 ; i<num2.length;i++){
    currentnum = Math.max(num2[i] , currentnum + num2[i]);
     maximum = Math.max(maximum, currentnum)
}

console.log("Maximum:" , maximum)