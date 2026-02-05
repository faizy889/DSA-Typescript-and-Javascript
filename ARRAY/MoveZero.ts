let nums:number[] = [2,0,6,0,5,0,8,2];
let insertpos : number = 0 ;

for(let i=0; i<nums.length ; i++){
    if(nums[i]!==0){
        nums[insertpos] = nums[i];
         insertpos++;
    }
}

while(insertpos>nums.length){
    nums[insertpos] = 0;
    insertpos++;
}