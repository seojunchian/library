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
    /* CREATE TABLE HEAD ELEMENTS */
    let theadElement = document.createElement("thead");
    let trElement = document.createElement("tr");

    /* STYLE IT */
    tableElement.style.width = "75%";
    tableElement.style.color = "#fff";
    tableElement.style.margin = "20px auto 0";
    tableElement.style.textAlign = "center";
    tableElement.style.background = "#29517a";

    /* APPEND TO DOCUMENT */
    tableDiv.appendChild(tableElement);
    tableElement.appendChild(theadElement);
    theadElement.appendChild(trElement);

    /* TABLE TEXT CONTENT */
    for(let i=1; i<=5; i++) {
        if(i==1) {
            let tdTitleElement = document.createElement("td");
            tdTitleElement.textContent = "Title";
            trElement.appendChild(tdTitleElement);
        } else if(i==2) {
            let tdAuthorElement = document.createElement("td");
            tdAuthorElement.textContent = "Author";
            trElement.appendChild(tdAuthorElement);
        } else if(i==3) {
            let tdPagesElement = document.createElement("td");
            tdPagesElement.textContent = "Pages";
            trElement.appendChild(tdPagesElement);
        } else if(i==4) {
            let tdReadElement = document.createElement("td");
            tdReadElement.textContent = "Read";
            trElement.appendChild(tdReadElement);
        } else if(i==5) {
            let tdReadElement = document.createElement("td");
            tdReadElement.textContent = "Delete";
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
        } else if(i==2) {
            let tdAuthorElement = document.createElement("td");
            tdAuthorElement.innerHTML = bookAuthor.value;
            trElement.appendChild(tdAuthorElement);
        } else if(i==3) {
            let tdPagesElement = document.createElement("td");
            tdPagesElement.innerHTML = bookPages.value;
            trElement.appendChild(tdPagesElement);
        } else if(i==4) {
            let tdReadElement = document.createElement("td");
            tdReadElement.innerHTML = bookRead.checkVisibility();
            trElement.appendChild(tdReadElement);
        } else if(i==5) {
            let tdReadElement = document.createElement("td");
            tdReadElement.textContent = deleteRow();
            trElement.appendChild(tdReadElement);
        }
    }
}

function deleteRow() {}