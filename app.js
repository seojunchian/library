/* INPUTS - CALL */
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");

/* SELECT TABLE - CALL , CREATE */
const tableDiv = document.getElementById("table");
let tableElement = document.createElement("table");

/* SAVE BUTTON - CALL */
const btnSave = document.getElementById("btn-save");

/* ADD BUTTON - EVENT */
btnSave.addEventListener("click", addBook);
let clickCount = 0;
bookRead.addEventListener("click", () => {
    if(clickCount % 2 == 0) {
        bookRead.style.backgroundColor = "#06a94d";
        clickCount += 1;
    } else if (clickCount % 2 == 1){
        bookRead.style.backgroundColor = "#CD5C5C"; 
        clickCount += 1;
    }
})

/* CREATE TABLE HEAD ELEMENTS */
let theadElement = document.createElement("thead");
let trElement = document.createElement("tr");

function tableStyle() {
    /* STYLE IT */
    tableElement.style.width = "75%";
    tableElement.style.color = "#000";
    tableElement.style.textAlign = "center";
    tableElement.style.margin = "20px auto 0";
    tableElement.style.background = "#f9f9f7";
    tableElement.style.borderRadius = "10px";
}

/* ADD BOOK - CREATE */
function addBook() {
    if(!tableDiv.hasChildNodes()) {
        createTHead();
        createTBody();
    } else {
        createTBody();
    }
}

function createTHead() {
    tableStyle();

    /* APPEND TO DOCUMENT */
    tableDiv.appendChild(tableElement);
    tableElement.appendChild(theadElement);
    theadElement.appendChild(trElement);

    /* TABLE TEXT CONTENT */
    for(let i=1; i<=5; i++) {
        if(i==1) {
            let tdTitleElement = document.createElement("td");
            tdTitleElement.style.minWidth = "60px";
            tdTitleElement.style.maxWidth = "60px";
            tdTitleElement.textContent = "Title";
            trElement.appendChild(tdTitleElement);
        } else if(i==2) {
            let tdAuthorElement = document.createElement("td");
            tdAuthorElement.style.minWidth = "60px";
            tdAuthorElement.style.maxWidth = "60px";
            tdAuthorElement.textContent = "Author";
            trElement.appendChild(tdAuthorElement);
        } else if(i==3) {
            let tdPagesElement = document.createElement("td");
            tdPagesElement.style.minWidth = "60px";
            tdPagesElement.style.maxWidth = "60px";
            tdPagesElement.textContent = "Pages";
            trElement.appendChild(tdPagesElement);
        } else if(i==4) {
            let tdReadElement = document.createElement("td");
            tdReadElement.style.minWidth = "60px";
            tdReadElement.style.maxWidth = "60px";
            tdReadElement.textContent = "Read";
            trElement.appendChild(tdReadElement);
        } else if(i==5) {
            let tdReadElement = document.createElement("td");
            tdReadElement.style.minWidth = "60px";
            tdReadElement.style.maxWidth = "60px";
            tdReadElement.textContent = "Options";
            trElement.appendChild(tdReadElement);
        }
    }
}

function createTBody() {
    /* CREATE TABLE HEAD ELEMENTS */
    let tbodyElement = document.createElement("tbody");
    let trElement = document.createElement("tr");

    /* APPEND TO DOCUMENT */
    tableElement.appendChild(tbodyElement);
    tbodyElement.appendChild(trElement);

    /* TABLE TEXT CONTENT */
    for(let i=1; i<=5; i++) {
        if(i==1) {
            let tdTitleElement = document.createElement("td");
            tdTitleElement.innerHTML = bookTitle.value;
            trElement.appendChild(tdTitleElement);
            bookTitle.value = "";
        } else if(i==2) {
            let tdAuthorElement = document.createElement("td");
            tdAuthorElement.innerHTML = bookAuthor.value;
            trElement.appendChild(tdAuthorElement);
            bookAuthor.value = "";
        } else if(i==3) {
            let tdPagesElement = document.createElement("td");
            tdPagesElement.innerHTML = bookPages.value;
            trElement.appendChild(tdPagesElement);
            bookPages.value = "";
        } else if(i==4) {
            let buttonReadElement = document.createElement("button");
            buttonReadElement.innerHTML = "have";
            buttonReadElement.style.width = "100px";
            buttonReadElement.style.height = "25px";
            buttonReadElement.style.borderRadius = "5px";
            buttonReadElement.style.border = "none";
            buttonReadElement.style.cursor = "pointer";
            if(buttonReadElement.innerHTML == "have") {
                buttonReadElement.style.backgroundColor = "#06a94d";
            } else {
                buttonReadElement.style.backgroundColor = "#CD5C5C";
            }
            trElement.appendChild(buttonReadElement);
            bookRead.value = "";
        } else if(i==5) {
            let tdOptionsElement = document.createElement("td");
            tdOptionsElement.textContent = "Options";
            trElement.appendChild(tdOptionsElement);
        }
    }
}