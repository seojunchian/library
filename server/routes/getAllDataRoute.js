const connection = require("../db/db");
const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
	connection.query(`SELECT * FROM bookinfo`, (err, res) => {
		if (err) throw err;
		response.send(res);
	});
});

module.exports = router;
