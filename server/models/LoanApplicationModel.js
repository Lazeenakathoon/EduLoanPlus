const mongoose = require("mongoose");

const loanApplicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    loanAmount: {
      type: Number,
      required: true,
    },
    tenure: {
      type: Number,
      required: true,
    },
    interestRate: {
      type: Number,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
      trim: true,
    },
    monthlyIncome: {
      type: Number,
      required: true,
    },
    documents: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LoanApplication", loanApplicationSchema);
