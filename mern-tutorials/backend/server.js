const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => console.log(`App started on port ${port}`));
app.get("/", (req,res) => {
	res.json({
			message: `Get goals`
		})});
app.post("/", (req,res) => {
	res.json({
			message: `Set goal`
		})});
app.put("/:id", (req,res) => {
	res.json({
			message: `Update goal ${req.params.id}`
		})});
app.delete("/:id", (req,res) => {
	res.json({
			message: `Delete goal ${req.params.id}`
		})});


