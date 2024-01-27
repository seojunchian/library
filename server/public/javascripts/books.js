document.getElementById("header-nav-home").addEventListener("click", () => {
	window.location.href = "/";
});
document.getElementById("header-nav-add").addEventListener("click", () => {
	window.location.href = "/add";
});

function ObjectLength(object) {
	let length = 0;
	for (let key in object) {
		if (object.hasOwnProperty(key)) {
			++length;
		}
	}
	return length;
}

const main = document.querySelector(".main");
document.addEventListener("DOMContentLoaded", createTable);
async function createTable() {
	// FETCH DATA AND ASSIGN
	let allData;
	await fetch("/getAllData")
		.then((response) => response.json(response))
		.then((data) => (allData = data));

	// TABLE - THEAD - TR
	const table = document.createElement("table");
	main.appendChild(table);
	const tableTHead = document.createElement("thead");
	table.appendChild(tableTHead);
	const tableTHeadTr = document.createElement("tr");
	tableTHead.appendChild(tableTHeadTr);

	// CELLS
	for (let i = 0; i < ObjectLength(allData[0]); i++) {
		const tableTHeadTrTd = document.createElement("td");
		if (i == 0) tableTHeadTrTd.textContent = "Name";
		else if (i == 1) tableTHeadTrTd.textContent = "Author";
		else if (i == 2) tableTHeadTrTd.textContent = "Pages";
		else if (i == 3) tableTHeadTrTd.textContent = "Read";
		else if (i == 4) tableTHeadTrTd.textContent = "Edit";
		tableTHeadTr.appendChild(tableTHeadTrTd);
	}

	// TBODY
	const tableTBody = document.createElement("tbody");
	table.appendChild(tableTBody);

	// CELLS
	for (let i = 0; i < allData.length; i++) {
		const tableTBodyTr = document.createElement("tr");
		tableTBody.appendChild(tableTBodyTr);
		for (let j = 0; j < 5; j++) {
			const tableTBodyTrTd = document.createElement("td");
			if (j == 0) {
				tableTBodyTrTd.textContent = allData[j].name;
			} else if (j == 1) {
				tableTBodyTrTd.textContent = allData[i].author;
			} else if (j == 2) {
				tableTBodyTrTd.textContent = allData[i].page;
			} else if (j == 3) {
				const tableTBodyTrTdButton = document.createElement("button");
				tableTBodyTrTdButton.textContent = "Read";
				tableTBodyTrTd.appendChild(tableTBodyTrTdButton);
			} else if (j == 4) {
				const tableTBodyTrTdButton = document.createElement("button");
				tableTBodyTrTdButton.innerHTML = "Delete";
				tableTBodyTrTd.appendChild(tableTBodyTrTdButton);
			}
			tableTBodyTr.appendChild(tableTBodyTrTd);
		}
	}
}
