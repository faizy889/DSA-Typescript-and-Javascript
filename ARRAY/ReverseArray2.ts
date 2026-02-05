let nums1: number[] = [1,2,3,4,5,6,7];
let k:number = 3;

k = k%nums1.length;


function Reversed(arr:number[] , start:number , end:number){ 
    while(start<end){
let temp = nums1[start];
 nums1[start]  = nums1[end];
 nums1[end]=temp;
start++;
end--; 

}
 
}

Reversed(nums1 , k , nums1.length-1 );
