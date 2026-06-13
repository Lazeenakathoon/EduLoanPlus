const express = require("express");

const router = express.Router();

const {
  applyLoan,
  getAllLoans,
  updateLoanStatus,
} = require("../controllers/loanController");

router.post("/apply", applyLoan);

router.get("/", getAllLoans);

router.put("/:id", updateLoanStatus);

module.exports = router;