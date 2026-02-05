let sortedarr:number[] = [1,2,3,4,5,6,7];
let j:number =0;

for(let i = 0 ; i<sortedarr.length ; i++){
    if(sortedarr[i]!==sortedarr[j]){
        j++;
        sortedarr[j] = sortedarr[i];
    }
}


let newlength :number = j+1;
console.log("unique element:" , sortedarr.slice(0  , newlength) );