const connection = require("../db/db.js");
const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
	response.render("add");
});

router.post("/", (request, response) => {
	let post_title = request.body.main_form_add_inputs_title;
	let post_author = request.body.main_form_add_inputs_author;
	let post_page = request.body.main_form_add_inputs_page;
	let post_read = request.body.main_form_add_inputs_read;
	if (post_title == "") post_title = null;
	if (post_author == "") post_author = null;
	if (!post_page) post_page = 0;
	if (post_read == null) post_read = 0;
	connection.query(
		`INSERT INTO bookinfo (name, author, page, read) VALUES ("${post_title}","${post_author}",${post_page}, ${post_read})`
	);
	response.redirect("books");
});

module.exports = router;
