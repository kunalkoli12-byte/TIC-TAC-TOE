let boxes = document.querySelectorAll("#box"); 

let reset = document.querySelector("#reset");

let turn = 0 ;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turn = 0 ;
    for(let box of boxes) {
        box.innerText = "";
    }
    for(let box of boxes) {
        box.disabled = false ;
    }

};

const checkWinner = () => {
    for(let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 == pos2 && pos2 == pos3) {
              let msg =  document.querySelector("h2");
              msg.innerText = `Congratulations, Winner is ${pos1}`
              for(let box of boxes) {
                box.disabled = true;
              }
            }
        }

    }
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turn == 0){
            turn = 1 ;
            box.innerText = "0";
            checkWinner();
        }else {
            box.innerText = "X";
            turn = 0;
            checkWinner();
        }
        box.disabled = true ;
    });
});


reset.addEventListener("click", resetgame);
