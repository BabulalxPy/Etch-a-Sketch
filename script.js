function makeGrid(rows, cols){
    let container = document.querySelector(".container");
    for(i = 0;i < rows; i++){
        let row = document.createElement("div")

        for(j = 0;j < cols; j++){
            let col = document.createElement("button");
            col.textContent = "";
            col.addEventListener("mousemove", () =>{
                col.style.backgroundColor = "black";
            });

            const resetBTN = document.querySelector(".reset");
            resetBTN.addEventListener("click", () =>{
                col.style.backgroundColor = "white";
            });

            row.appendChild(col).className = "col";
            
        };

        container.appendChild(row).className = "row";

    };
};

const ip = document.querySelector("input");
//const inp = document.querySelector(".ip2");

function gridSize(){
    let r = ip.value;
    if(r > 64){
        alert("Maximum is 64");
        r = '';
        
    };
    //const c = inp.value;
    
    function deleteGridElements(){
        const allDiv = document.querySelectorAll(".row");
        allDiv.forEach((allDiv)=>{
            allDiv.remove();
        });
    };
    deleteGridElements();

    makeGrid(r,r);
    ip.focus;
};
const btn = document.querySelector("button");
btn.addEventListener("click", gridSize);



