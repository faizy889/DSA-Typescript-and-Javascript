const CreateSong=(title)=>{
    return{
        title,
        next:null,
        prev:null
    }
}

let head= null
let tail=null
let current = null


const AddNode=(title)=>{
 let newsong = CreateSong(title)
    if(!head){
    head = tail =  current = newsong;
   return
}

tail.next = newsong
newsong.prev = tail
tail = newsong
}


const PlayCurrent=()=>{
    if(!current){
     console.log("No song is playing")
    return
    }
    console.log("playing:" , current.title)
}


const NextSong=()=>{
    if(!current||!current.next){
        console.log("No next Song")
    }
    current = current.next
    PlayCurrent()
}

const PrevSong=()=>{
    if(!current||!current.prev){
   console.log("No Prev Song")
return    
}
current = current.prev
PlayCurrent()
}

const ListtoArray=()=>{
    let arr=[]
    let temp = head
    while(temp){
        arr.push(temp)
        temp=temp.next
    }
    return arr
}


const ShuffleArray=(arr)=>{
for(let i=arr.length-1;i>0;i--){
    let j = Math.floor(Math.random()*(i+1))
    ;[arr[i] , arr[j]] = [arr[j] , arr[i]]
}
}

function rebuildList(arr) {
  head = arr[0]
  head.prev = null

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
    arr[i + 1].prev = arr[i]
  }

  tail = arr[arr.length - 1]
  tail.next = null

  current = head
}


function shufflePlaylist() {
  let arr = ListtoArray()
  ShuffleArray(arr)
  rebuildList(arr)
  console.log("🔀 Playlist shuffled")
}

AddNode("Song A")
AddNode("Song B")
AddNode("Song C")
AddNode("Song D")

PlayCurrent()
NextSong()
NextSong()
PrevSong()

shufflePlaylist()
PlayCurrent()
NextSong()
