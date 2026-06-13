const express = require("express");
const { calculate } = require("../Controllers/loanController");

const router = express.Router();

router.post("/calculate", calculate);

module.exports = router;
