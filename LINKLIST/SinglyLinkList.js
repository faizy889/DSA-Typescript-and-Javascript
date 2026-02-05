const createnode=(val)=>{
    return{
 data:val,
next:null

    }
}

let head = null

const addnode=(value)=>{
const newnode = createnode(value)
if(head==null){
    head = newnode
    return;
}

let current = head

while(current.next!==null){
    current = current.next
}

current.next = newnode
}

const printList=()=>{
    let current = head
    let result = ""
    while(current!=null){
        result += current.data + "->"
        current = current.next
    }
    console.log(result + "Null")
}

addnode(10)
addnode(20)
addnode(30)
addnode(40)

printList()