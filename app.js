let boxes = document.querySelectorAll(".box");
let game = document.querySelector("#game");
let winner = document.getElementById("winner");
let Resetbtn = document.querySelector(".button");

let turnO = true ;

const winPattern = [
    [0,1,2] ,
    [3,4,5] , 
    [6,7,8] ,
    [0,3,6] ,
    [1,4,7] ,
    [2,5,8] ,
    [0,4,8] ,
    [2,4,6] ,
]


boxes.forEach((box)=>{
    box.addEventListener("click" , () =>{
        if (turnO){
        box.innerText = "O";
        turnO = false ;
    }else{
        box.innerText = "X";
        turnO = true ;
    }
    box.disabled = true ;

    checkwinner();

    })
}
)

const checkwinner = () => {
    for(pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                winner.innerText = ("winner is" + " " + pos1val )
            }
        }
    }
}

Resetbtn.addEventListener("click" , ()=>{
boxes.forEach((box)=>{
    box.innerText="";
    winner.innerText = "";

    box.disabled=false ;
})})   