"use strict"

function createItem(){
    let parent = document.getElementById("item-holder")
    let name = document.getElementById("name-input").value;
    if(!name) return
    let date = new Date().toISOString();
    let id = "item-"+ date
    let textId = "text-"+ date;
    let checkboxId = "checkbox-" + date;
    let item = `
            <div class="item" id = ${id}>
                <div class="item-content">
                <input class="checkbox" type="checkbox" onclick="checkItem('${date}')" id = ${checkboxId}> <p class="item-text" id = ${textId}>${name}</p> 
                <img class="trash" src="images/trash.png" onclick="deleteItem('${id}')">
                </div>
            </div>`

    parent.insertAdjacentHTML('beforeend', item)
}

function deleteItem(id){
    let el = document.getElementById(id);
    el.remove();
}

function checkItem(id){
    let text = document.getElementById("text-"+id);
    let checkbox = document.getElementById("checkbox-"+id);

    text.style.textDecorationLine = checkbox.checked ? "line-through" : "none";
}