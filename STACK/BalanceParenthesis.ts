const isBalance=(text:string):boolean=>{
    let stack:string[] = [];
    text.split("").map(char=>{
        if(char ==="("){
            stack.push(char);
        }

        if(char ===")"){
            stack.pop();
        }
        
    });
    return stack.length===0;
}

console.log(isBalance("(())"));
console.log(isBalance("(()"));