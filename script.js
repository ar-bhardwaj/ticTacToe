let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newgame= document.querySelector("#nvigame");
let msgContainer= document.querySelector(".mesg");
let mssg = document.querySelector("#msg")

let turn = true;
var win=false;
let count=0;

const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetgame =()=>{
    turn = true;
    count=0;
    enabled();
    msgContainer.classList.add("hide");
    reset.disabled=false;
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn){
            box.innerText = "O";
            turn = false;

        }
        else{
            box.innerText="X";
            turn = true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
        gameDraw();
        reset.disabled=true;
        }
    });
});

const gameDraw = () => {
    mssg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    dissabled();
  };

const dissabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabled=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    mssg.innerText =`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
    dissabled();
};

const checkWinner=() =>{
    for(let i of winpattern){
        let val1 =boxes[i[0]].innerText;
        let val2 =boxes[i[1]].innerText;
        let val3 =boxes[i[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !=""){
            if(val1===val2 && val2===val3){
                showWinner(val1);
                reset.disabled="true";
                return true;
            }
        }

    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


