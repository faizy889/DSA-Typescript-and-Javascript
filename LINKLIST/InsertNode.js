const createnode = (val) => {
    return {      
        data: val, 
        next: null
    }
}

let head = null

const addnode = (val) => {
    const newnode = createnode(val)
    if (head === null) {
        head = newnode
        return
    }
    let current = head;

    // Ye bilkul sahi hai, aakhri node par rukega
    while (current.next !== null) {
        current = current.next;
    }

    current.next = newnode
}

const printlist = () => {
    let current = head
    let result = ""
    while (current != null) {
        result += current.data + "->"
        current = current.next
    }
    console.log(result + "NULL")
}

const addatfront=(val)=>{
const newnode = createnode(val)

newnode.next = head
head = newnode

console.log(val + "Add at front")
}

const addatend=(val)=>{
const newnode = createnode(val)

if(head==null){
    head = newnode
}
let current = head

while(current.next!==null){
    current = current.next

}

current.next = newnode
console.log(val + "Insert at end")
}


 const deletbyvalue=(target)=>{
if(head==null){
    console.log("List is Empty")
    return
}

if(head.data ===target){
    head = head.next

}

let current = head ; 
let previous = null


while(current!==null && current.data!==target){
    previous =current
    current = current.next

    if(current==null){
        console.log("List has been finished")
    return
    }
    previous.next = current.next
    console.log(target + "Deleted the selected node")
}

 }

const SearchElement=(target)=>{
let current  = head

while(current!==null){
    if(current.data==target){
        console.log("Target Has been Found"  + target)
      return true;
    }

    current =current.next
}
console.log(target + "It is not found")
return false;
}


// Data add kiya
addatfront(20)
addnode(10)
addnode(20)
addnode(30)
addnode(40)
addatend(50)
// Function ko sahi se call kiya
printlist()

deletbyvalue(30)
printlist()

SearchElement(20)