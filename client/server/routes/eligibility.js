const express = require("express");
const { checkEligibility } = require("../Controllers/eligibilityController");

const router = express.Router();

router.post("/", checkEligibility);

module.exports = router;
