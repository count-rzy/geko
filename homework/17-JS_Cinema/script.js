const groups=document.getElementById("groups");
const count=document.getElementById("count");
const sum=document.getElementById("sum");
const btn= document.getElementById("btn");

let qanak=0;
const gin=100;

for(let i=0;i<48;i++){
    const row=document.createElement("div");
    row.classList.add("row");

    row.addEventListener("click",()=>{
if(row.classList.contains("occupied")) return;

if(row.classList.contains("selected")){
    row.classList.remove("selected");
    qanak--;
}else{
    row.classList.add("selected");
    qanak++;
}

hashvel();
    });
    groups.appendChild(row);

}

function hashvel(){
    count.textContent=qanak;
    sum.textContent= qanak*gin;
}

btn.addEventListener("click",()=>{
    const selected = document.querySelectorAll(".selected");

    selected.forEach(row=>{
        row.classList.remove("selected");
        row.classList.add("occupied");
    });
});