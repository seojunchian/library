const address = document.getElementById("accAddress");
const balance = document.getElementById("accBalance");
document.getElementById("btn-login").addEventListener("click", metamaskLogin);

async function metamaskLogin() {
	const accounts = await window.ethereum.request({
		method: "eth_requestAccounts",
	});
	const amount = await window.ethereum.request({
		method: "eth_getBalance",
		params: [accounts[0]],
	});
	address.textContent = "Address: " + accounts[0];
	balance.textContent = "Balance: 0." + BigInt(amount);

	window.ethereum.on("accountsChanged", async () => {
		const accounts = await window.ethereum.request({
			method: "eth_accounts",
		});
		let currentAccount = accounts[0];
		let amount = await window.ethereum.request({
			method: "eth_getBalance",
			params: [currentAccount],
		});
		let currentBalance = amount;
		if (accounts[1] != currentAccount) {
			currentAccount == accounts[1];
			address.innerHTML = "Address: " + currentAccount;
			balance.innerHTML = "Balance: 0." + BigInt(currentBalance);
		}
	});
}
