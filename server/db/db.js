const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "seojun098",
	database: "library",
});

connection.query("SELECT * FROM bookinfo", (err, res) => {
	if (err) throw err;
	console.log(res);
});

module.exports = connection;
