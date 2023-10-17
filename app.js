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
bookRead.addEventListener("click", () => {
    if(bookRead.style.backgroundColor == "#CD5C5C") {
        bookRead.style.backgroundColor = "#06a94d";
    } else if(bookRead.style.backgroundColor == "#06a94d") {
        bookRead.style.backgroundColor = "#CD5C5C";
    }
})

/* ADD BOOK - CREATE */
function addBook() {
    if(!tableDiv.hasChildNodes()) {
        createTHead();
        createTBody();
    } else {
        createTBody();
    }
}

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
            tdTitleElement.style.borderRadius = "5px";
            tdTitleElement.style.minWidth = "60px";
            tdTitleElement.style.maxWidth = "60px";
            tdTitleElement.textContent = "Title";
            trElement.appendChild(tdTitleElement);
        } else if(i==2) {
            let tdAuthorElement = document.createElement("td");
            tdAuthorElement.style.borderRadius = "5px";
            tdAuthorElement.style.minWidth = "60px";
            tdAuthorElement.style.maxWidth = "60px";
            tdAuthorElement.textContent = "Author";
            trElement.appendChild(tdAuthorElement);
        } else if(i==3) {
            let tdPagesElement = document.createElement("td");
            tdPagesElement.style.borderRadius = "5px";
            tdPagesElement.style.minWidth = "60px";
            tdPagesElement.style.maxWidth = "60px";
            tdPagesElement.textContent = "Pages";
            trElement.appendChild(tdPagesElement);
        } else if(i==4) {
            let tdReadElement = document.createElement("td");
            tdReadElement.style.borderRadius = "5px";
            tdReadElement.style.minWidth = "60px";
            tdReadElement.style.maxWidth = "60px";
            tdReadElement.textContent = "Read";
            trElement.appendChild(tdReadElement);
        } else if(i==5) {
            let tdOptionsElement = document.createElement("td");
            tdOptionsElement.style.borderRadius = "5px";
            tdOptionsElement.style.minWidth = "60px";
            tdOptionsElement.style.maxWidth = "60px";
            tdOptionsElement.textContent = "Options";
            trElement.appendChild(tdOptionsElement);
        }
    }
}
function createTBody() {
    /* CREATE TABLE HEAD ELEMENTS */
    let tbodyElement = document.createElement("tbody");
    tableElement.appendChild(tbodyElement);
    let trElement = document.createElement("tr");
    /* APPEND TO DOCUMENT */
    tbodyElement.appendChild(trElement);

    /* TABLE TEXT CONTENT */
    for(let i=1; i<=5; i++) {
        if(i==1) {
            let tdTitleElement = document.createElement("td");
            tdTitleElement.style.borderRadius = "5px";
            tdTitleElement.innerHTML = bookTitle.value;
            trElement.appendChild(tdTitleElement);
            bookTitle.value = "";
        } else if(i==2) {
            let tdAuthorElement = document.createElement("td");
            tdAuthorElement.style.borderRadius = "5px";
            tdAuthorElement.innerHTML = bookAuthor.value;
            trElement.appendChild(tdAuthorElement);
            bookAuthor.value = "";
        } else if(i==3) {
            let tdPagesElement = document.createElement("td");
            tdPagesElement.style.borderRadius = "5px";
            tdPagesElement.innerHTML = bookPages.value;
            trElement.appendChild(tdPagesElement);
            bookPages.value = "";
        } else if(i==4) {
            let buttonReadElement = document.createElement("button");
            buttonReadElement.style.borderRadius = "5px";
            buttonReadElement.style.width = "100px";
            buttonReadElement.style.height = "25px";
            buttonReadElement.style.borderRadius = "5px";
            buttonReadElement.style.border = "none";
            buttonReadElement.style.cursor = "pointer";
            buttonReadElement.style.backgroundColor = bookRead.style.backgroundColor;
            buttonReadElement.addEventListener("click", () => {
                if(bookRead.style.backgroundColor == "#CD5C5C") {
                    buttonReadElement.style.backgroundColor = "#06a94d";
                    buttonReadElement.innerHTML = "hasn't";
                } else if (bookRead.style.backgroundColor == "#06a94d"){
                    buttonReadElement.style.backgroundColor = "#CD5C5C";
                    buttonReadElement.innerHTML = "have";
                }
            })
            trElement.appendChild(buttonReadElement);
        } else if(i==5) {
            let tdOptionsElement = document.createElement("td");
            tdOptionsElement.style.borderRadius = "5px";
            tdOptionsElement.textContent = "Options";
            trElement.appendChild(tdOptionsElement);
        }
    }
}