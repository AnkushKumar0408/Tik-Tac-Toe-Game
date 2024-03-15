let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let container = document.querySelector(".msg-container");
let page = document.querySelector("#game-page");

let arr = Array.from(boxes);
let start = "X";

let win =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

    arr.forEach(boxes => {
        // console.log(boxes);
        boxes.addEventListener("click", () => {
            // console.log("button was clicked")
            if(start === "X"){
                boxes.innerText = "X";
                start = "O";
                // boxes.disabled = "disabled";
            }
            else{
                boxes.innerText = "O";
                start = "X";
                // boxes.disabled = "disabled";
            }
            boxes.disabled = "disabled";
            checkWin();
        })
    })

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    container.classList.remove("hide");
}


const checkWin = () => {
    for(let pattern of win){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 =  boxes[pattern[2]].innerText;

       if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                disableBtn();
                resetBtn.style.display = "none";
                page.style.display = "none";
                showWinner(pos1);
            }
       }
       
    }
}

const disableBtn = () => {
    for(box of boxes){
    box.disabled = true;
    }
}



const enableBtn = () => {
    start = "X";
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const enableBtn1 = () => {
    start = "X";
    resetBtn.style.display = "inline"
    container.classList.add("hide");
    resetBtn.classList.remove("removeBtn");
    page.style.display = "inline";
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

resetBtn.addEventListener("click", enableBtn);
newBtn.addEventListener("click", enableBtn1);
