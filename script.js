const container = document.querySelector(".container");


function makeRows(rows, cols){
    let container = document.querySelector(".container");
    for(i = 0; i < (rows); i++){
        let row = document.createElement("div");
        let col = document.createElement("button");
        col.textContent = "";
        row.appendChild(col).className = "col";
        col.addEventListener("click", () =>{
            cell.style.backgroundColor = "green";
        });
        container.appendChild(row).className = "row";
    }
    for(i = 0; i < (cols); i++){
        let row = document.querySelector("div");
        
    }
}

makeRows(5,5)
let col = document.querySelector("button");










const row1 = document.createElement("div");
row1.classList.add("row1");
const row2 = document.createElement("div");
row2.classList.add("row2");
const row3 = document.createElement("div");
row3.classList.add("row3");
const row4 = document.createElement("div");
row4.classList.add("row4");

const div1 = document.createElement("button");
const div2 = document.createElement("button");
const div3 = document.createElement("button");
const div4 = document.createElement("button");
const div5 = document.createElement("button");
const div6 = document.createElement("button");
const div7 = document.createElement("button");
const div8 = document.createElement("button");
const div9 = document.createElement("button");
const div10 = document.createElement("button");
const div11 = document.createElement("button");
const div12 = document.createElement("button");
const div13 = document.createElement("button");
const div14 = document.createElement("button");
const div15 = document.createElement("button");
const div16 = document.createElement("button");

div1.addEventListener("mouseover", () => {
    div1.style.backgroundColor = "green";
});
div2.addEventListener("mouseover", () => {
    div2.style.backgroundColor = "green";
});
div3.addEventListener("mouseover", () => {
    div3.style.backgroundColor = "green";
});
div4.addEventListener("mouseover", () => {
    div4.style.backgroundColor = "yellow";
});
div5.addEventListener("mouseover", () => {
    div5.style.backgroundColor = "green";
});
div6.addEventListener("mouseover", () => {
    div6.style.backgroundColor = "beige";
});
div7.addEventListener("mouseover", () => {
    div7.style.backgroundColor = "violet";
});
div8.addEventListener("mouseover", () => {
    div8.style.backgroundColor = "green";
});
div9.addEventListener("mouseover", () => {
    div9.style.backgroundColor = "blue";
});
div10.addEventListener("mouseover", () => {
    div10.style.backgroundColor = "green";
});
div11.addEventListener("mouseover", () => {
    div11.style.backgroundColor = "green";
});
div12.addEventListener("mouseover", () => {
    div12.style.backgroundColor = "red";
});
div13.addEventListener("mouseover", () => {
    div13.style.backgroundColor = "green";
});
div14.addEventListener("mouseover", () => {
    div14.style.backgroundColor = "purple";
});
div15.addEventListener("mouseover", () => {
    div15.style.backgroundColor = "pink";
});
div16.addEventListener("mouseover", () => {
    div16.style.backgroundColor = "maroon";
});



row1.appendChild(div1);
row1.appendChild(div2);
row1.appendChild(div3);
row1.appendChild(div4);

row2.appendChild(div5);
row2.appendChild(div6);
row2.appendChild(div7);
row2.appendChild(div8);

row3.appendChild(div9);
row3.appendChild(div10);
row3.appendChild(div11);
row3.appendChild(div12);

row4.appendChild(div13);
row4.appendChild(div14);
row4.appendChild(div15);
row4.appendChild(div16);

container.appendChild(row1);
container.appendChild(row2);
container.appendChild(row3);
container.appendChild(row4);
