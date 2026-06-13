const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    collegeName: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    loanAmount: {
      type: Number,
      required: true,
    },

    familyIncome: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Loan", loanSchema);