/* Input Elements */
const inputBookTitle = document.getElementById("input-book-title");
const inputBookAuthor = document.getElementById("input-book-author");
const inputBookPageNumber = document.getElementById("input-book-pages");

const ethAccAddress = document.getElementById("ethAccAddress");
const ethAccBalance = document.getElementById("ethAccBalance");

/* Table */
const formHTMLElement = document.getElementById("form");
const tableElement = document.createElement("table");
tableElement.style.width = "60%";
tableElement.style.background = "#fff";
tableElement.style.textAlign = "center";
tableElement.style.borderRadius = "10px";
formHTMLElement.appendChild(tableElement);

/* Buttons */
/* Save */
$("#input-btn-save").click(addbook);

/* Connect to MetaMask */
$("#btn-login").click(
    event => {
        let account;
        ethereum.request({method: "eth_requestAccounts"}).then(accounts => {
            account = accounts[0];
            ethAccAddress.innerHTML = `Address: ${account}`;
    
            ethereum.request({method: "eth_getBalance", params: [account, "latest"]}).then(result => {
                let wei = parseInt(result, 16);
                let balance = wei / (10**18);
                ethAccBalance.innerHTML = `Balance: ${balance} ETH`;
            });
        });
    }
)

/* Add Book */
function addbook() {
    // gives error cant use 2 function after "?" idk why
    // !tableElement.hasChildNodes() ? tableHeadPart() tableBodyPart() : tableBodyPart();
    if(!tableElement.hasChildNodes()){
        tableHeadPart();
        tableBodyPart();
    } else {
        tableBodyPart();
    }
}

/* Table and Table Head */
function tableHeadPart() {
    const tableHeadElement = document.createElement("thead");
    tableElement.appendChild(tableHeadElement);
    const tableHeadTrElement = document.createElement("tr");
    tableHeadElement.appendChild(tableHeadTrElement);
    for(let i=0; i<5; i++) {
        const tableHeadTrTdElement = document.createElement("td");
        if(i==0){
            tableHeadTrTdElement.style.width = "20%";
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Title";
        } else if(i==1){
            tableHeadTrTdElement.style.width = "20%";
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Author";
        } else if(i==2){
            tableHeadTrTdElement.style.width = "20%";
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Page";
        } else if(i==3){
            tableHeadTrTdElement.style.width = "20%";
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Read";
        } else if(i==4){
            tableHeadTrTdElement.style.width = "20%";
            tableHeadTrTdElement.style.border = "1px solid black";
            tableHeadTrTdElement.style.borderRadius = "5px";
            tableHeadTrTdElement.innerHTML = "Options";
        }
        tableHeadTrElement.appendChild(tableHeadTrTdElement);
    }
}

/* Table Body Part */
function tableBodyPart(account) {
    const tableBodyElement = document.createElement("tbody");
    tableElement.appendChild(tableBodyElement);
    const tableBodyTrElement = document.createElement("tr");
    tableBodyElement.appendChild(tableBodyTrElement);
    for(let i=0; i<5; i++) {
        const tableBodyTrTdElement = document.createElement("td");
        tableBodyTrTdElement.style.border = "1px solid black";
        tableBodyTrTdElement.style.borderRadius = "5px";
        tableBodyTrTdElement.style.width = "20%";
        if(i==0){
            tableBodyTrTdElement.innerHTML = inputBookTitle.value;
        } else if(i==1){
            tableBodyTrTdElement.innerHTML = inputBookAuthor.value;
        } else if(i==2){
            tableBodyTrTdElement.innerHTML = inputBookPageNumber.value;
        } else if(i==3){
            /* BUTTON */
            const tableBodyTrButtonElement = document.createElement("button");
            tableBodyTrButtonElement.setAttribute("type", "button");
            tableBodyTrButtonElement.style.width = "40%";
            tableBodyTrButtonElement.style.border = "none";
            tableBodyTrButtonElement.style.cursor = "pointer";
            tableBodyTrButtonElement.style.borderRadius = "5px";
            tableBodyTrButtonElement.style.backgroundColor = "rgb(205, 92, 92)";
            tableBodyTrButtonElement.innerHTML = "haven't";
            /* PRESS BUTTON */
            tableBodyTrButtonElement.addEventListener("click", () => {
                if(tableBodyTrButtonElement.style.backgroundColor == "rgb(205, 92, 92)") {
                    tableBodyTrButtonElement.style.backgroundColor = "rgb(6, 169, 77)";
                    tableBodyTrButtonElement.innerHTML = "have";
                } else if(tableBodyTrButtonElement.style.backgroundColor === "rgb(6, 169, 77)") {
                    tableBodyTrButtonElement.style.backgroundColor = "rgb(205, 92, 92)";
                    tableBodyTrButtonElement.innerHTML = "haven't";
                }
            });
            /* ADD */
            tableBodyTrTdElement.appendChild(tableBodyTrButtonElement);
        } else if(i==4){
            /* BUTTON */
            const tableBodyTrButtonElement = document.createElement("button");
            tableBodyTrButtonElement.setAttribute("type", "button");
            tableBodyTrButtonElement.style.border = "none";
            tableBodyTrButtonElement.style.cursor = "pointer";
            tableBodyTrButtonElement.style.backgroundColor = "#fff";
            tableBodyTrButtonElement.innerHTML = "🗑️";
            /* PRESS BUTTON */
            tableBodyTrButtonElement.addEventListener("click", () => {
                tableBodyTrElement.remove();
            });
            /* ADD */
            tableBodyTrTdElement.appendChild(tableBodyTrButtonElement);
        }
        tableBodyTrElement.appendChild(tableBodyTrTdElement);
    }
}