let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");

let totalDivCount1 = document.getElementById("totalDivCount1");
let totalDivCount2 = document.getElementById("totalDivCount2");

let subDivContent1 = content1.getElementsByClassName("subdiv");
let subDivContent2 = content2.getElementsByClassName("subdiv");

let divdata = document.getElementById("content3");

// count function for keeping track on total count 
function updateCount() {
    totalDivCount1.innerText = "Total Task:- " + subDivContent1.length
    totalDivCount2.innerText = "Completed Task:- " + subDivContent2.length
}

// function to avoid default behaviour
function allowDrop(event) {
    event.preventDefault();
    // console.log("allowing to drag");
}

// function that set data when drag
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    // console.log("deaging has started");
}

// update function when drag is complete 
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text") 

    let draggedElement = document.getElementById(data);
    let draggedText = draggedElement.innerText.trim();

    if (event.target.id === "content1" && draggedElement.parentElement === content2) {
        content1.appendChild(draggedElement);
        divdata.innerText = divdata.innerText.replace(draggedText + '\n', "");
        updateCount();

    } else if (event.target.id === "content2" && draggedElement.parentElement === content1) {
        content2.appendChild(draggedElement);
        divdata.innerText += draggedText + "\n";
        updateCount();
    } else{
        alert("Plz Drag and drop element in proper container!!!");
    }
}

window.onload = function () {
    let divs = content1.getElementsByClassName("subdiv");
    for (let div of divs) {
        div.id = "div" + div.innerText; // Giving each div a unique ID for identification during drag
    }
    updateCount();
};
