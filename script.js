const toDoItems = document.getElementsByClassName
("to-do-items")[0];
const input =document.getElementById("input");
const trashIcon=document.getElementById("trash");

//eventlistener wil allow user to click enter 
input.addEventListener("keydown",function(event){
    if(event.key === "Enter")
    addItem();
})