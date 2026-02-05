let arr4:number[] = [2,3,4,5,6,7,8,];

let issorted : boolean = true;

for(let i =0 ; i<arr4.length; i++){
    if(arr4[i]>arr4[i+1]){
        issorted=false;
        break;
    }

}

console.log("Is sorted:" , issorted);