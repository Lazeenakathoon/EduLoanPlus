const express = require("express");
const authRoutes = require("./register");
const emiRoutes = require("./emi");
const eligibilityRoutes = require("./eligibility");

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @route   POST /api/auth/login
 * @desc    User authentication routes
 */
router.use("/auth", authRoutes);

/**
 * @route   POST /api/loan/calculate
 * @desc    EMI calculation routes
 */
router.use("/loan", emiRoutes);

/**
 * @route   POST /api/eligibility
 * @desc    Eligibility checking routes
 */
router.use("/eligibility", eligibilityRoutes);

module.exports = router;
