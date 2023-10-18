/* Input Elements */
const inputBookTitle = document.getElementById("input-book-title");
const inputBookAuthor = document.getElementById("input-book-author");
const inputBookPageNumber = document.getElementById("input-book-pages");
const inputBookReadInfo = document.getElementById("input-book-read-info");

/* TABLE */
const formHTMLElement = document.getElementById("form");
const tableElement = document.createElement("table");
tableElement.style.width = "60%";
tableElement.style.background = "#fff";
tableElement.style.textAlign = "center";
tableElement.style.borderRadius = "10px";
formHTMLElement.appendChild(tableElement);

/* Save Button */
const inputSaveButton = document.getElementById("input-btn-save");
inputSaveButton.addEventListener("click", addbook);

/* Add Book */
function addbook() {
    if(!tableElement.hasChildNodes()){
        addHead();
        addBody();
    } else {
        addBody();
    }
}

/* Table Part and Table Head Part */
function addHead() {
    const tableHeadElement = document.createElement("thead");
    tableElement.appendChild(tableHeadElement);
    const tableHeadTrElement = document.createElement("tr");
    tableHeadElement.appendChild(tableHeadTrElement);
    for(let i=0; i<5; i++) {
        const tableHeadTrTdElement = document.createElement("td");
        if(i==0){
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Title";
        } else if(i==1){
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Author";
        } else if(i==2){
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Page";
        } else if(i==3){
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Read";
        } else if(i==4){
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Options";
        }
        tableHeadTrElement.appendChild(tableHeadTrTdElement);
    }
}

/* Table Body Part */
function addBody() {
    const tableBodyElement = document.createElement("tbody");
    tableElement.appendChild(tableBodyElement);
    const tableBodyTrElement = document.createElement("tr");
    tableBodyElement.appendChild(tableBodyTrElement);
    for(let i=0; i<5; i++) {
        const tableBodyTrTdElement = document.createElement("td");
        if(i==0){
            tableBodyTrTdElement.style.border = "1px solid black";
            tableBodyTrTdElement.style.borderRadius = "5px";
            tableBodyTrTdElement.style.width = "22%";
            tableBodyTrTdElement.innerHTML = inputBookTitle.value;
        } else if(i==1){
            tableBodyTrTdElement.style.border = "1px solid black";
            tableBodyTrTdElement.style.borderRadius = "5px";
            tableBodyTrTdElement.style.width = "22%";
            tableBodyTrTdElement.innerHTML = inputBookAuthor.value;
        } else if(i==2){
            tableBodyTrTdElement.style.border = "1px solid black";
            tableBodyTrTdElement.style.borderRadius = "5px";
            tableBodyTrTdElement.style.Width = "22%";
            tableBodyTrTdElement.innerHTML = inputBookPageNumber.value;
        } else if(i==3){
            /* TD */
            tableBodyTrTdElement.style.width = "22%";
            tableBodyTrTdElement.style.borderRadius = "5px";
            tableBodyTrTdElement.style.border = "1px solid black";
            /* BUTTON */
            const tableBodyTrButtonElement = document.createElement("button");
            tableBodyTrButtonElement.setAttribute("type", "button");
            tableBodyTrButtonElement.style.width = "40%";
            tableBodyTrButtonElement.style.border = "none";
            tableBodyTrButtonElement.style.cursor = "pointer";
            tableBodyTrButtonElement.style.borderRadius = "5px";
            tableBodyTrButtonElement.style.backgroundColor = "#CD5C5C";
            tableBodyTrButtonElement.innerHTML = "haven't";
            /* PRESS BUTTON */
            tableBodyTrButtonElement.addEventListener("click", () => {
                if(tableBodyTrButtonElement.style.backgroundColor == "#CD5C5C") {
                    tableBodyTrButtonElement.style.backgroundColor = "#06a94d";
                    tableBodyTrButtonElement.innerHTML = "have";
                } else if(tableBodyTrButtonElement.style.backgroundColor == "#06a94d") {
                    tableBodyTrButtonElement.style.backgroundColor = "#CD5C5C";
                    tableBodyTrButtonElement.innerHTML = "haven't";
                }
            });
            /* ADD */
            tableBodyTrTdElement.appendChild(tableBodyTrButtonElement);
        } else if(i==4){
            /* TD */
            tableBodyTrTdElement.style.width = "12%";
            tableBodyTrTdElement.style.borderRadius = "5px";
            tableBodyTrTdElement.style.border = "1px solid black";
            /* BUTTON */
            const tableBodyTrButtonElement = document.createElement("button");
            tableBodyTrButtonElement.setAttribute("type", "button");
            tableBodyTrButtonElement.style.width = "15%";
            tableBodyTrButtonElement.style.border = "none";
            tableBodyTrButtonElement.style.cursor = "pointer";
            tableBodyTrButtonElement.style.borderRadius = "15px";
            tableBodyTrButtonElement.style.backgroundColor = "#fff";
            tableBodyTrButtonElement.innerHTML = "🗑️";
            /* PRESS BUTTON */
            //tableBodyTrButtonElement.addEventListener("click");
            /* ADD */
            tableBodyTrTdElement.appendChild(tableBodyTrButtonElement);
        }
        tableBodyTrElement.appendChild(tableBodyTrTdElement);
    }
}
//inputBookTitle.value.length == 0