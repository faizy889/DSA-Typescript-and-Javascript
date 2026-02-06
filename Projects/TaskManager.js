let stack = []
let queue = []

const addtask=(task)=>{
    stack.push(task);
    queue.push(task)
    console.log(`Task added ${task}`)
}

const undotask=()=>{
    if(stack.length===0){
     console.log("No task to added")
     return
    }
let removedtask = stack.pop()
queue.pop()
console.log(`Undo Task : ${removedtask}`)
}


const processtask=()=>{
    if(queue.length===0){
     console.log("No task to added")
     return
    }

    let task = queue.shift()
    console.log(`Processing Task ${task}`)
}


const showtask=()=>{
    console.log("Stack undo:history" , stack);
    console.log("Queue Processed" , queue);
}

addtask("Learn JavaScript")
addtask("Practice DSA")
addtask("Build Project")

showtask()

undotask()

showtask()

processtask()
processtask()

showtask()
