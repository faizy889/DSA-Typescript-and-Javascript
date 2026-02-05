

interface stack<T>{
    push:(val:T)=> void;
    pop:()=>T|undefined;
    peek:()=>T|undefined;
    isEmpty:()=>boolean;
}


const createstack=<T>():stack<T>=>{
 let items:T[] = [];


    return {
push:(val:T)=>{
    items.push(val);
},

pop:()=>{
  return items.pop();
},


peek:()=>{
    return items[items.length - 1];
},


isEmpty:()=>{
    return items.length===0;
}

    };
};

const stack = createstack<string>();
stack.push("A");
stack.push("B");
stack.pop();
console.log(stack.peek());