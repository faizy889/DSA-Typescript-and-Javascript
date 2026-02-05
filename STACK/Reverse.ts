const reversestack =(val:string):string=>{
return val.split("")
.reduce((rev , char)=>char+rev),
""
};

console.log("Faizan")