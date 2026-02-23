const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    category: String,
    location: String,
    description: String,
    image: String,
    trackingId: String,
    status: {
      type: String,
      default: "Arrived",
    },
    authorityResponse: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);