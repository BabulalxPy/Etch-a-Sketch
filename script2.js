function makeRows(rows, cols){
    let container = document.querySelector(".container");
    for(i = 0;i < rows; i++){
        let row = document.createElement("div")

        for(j = 0;j < cols; j++){
            let col = document.createElement("button");
            col.textContent = "";
            col.addEventListener("mouseover", () =>{
                col.style.backgroundColor = "pink";
            });
            row.appendChild(col).className = "col";
            
        };

        container.appendChild(row).className = "row";

    };
};

makeRows(50,50);