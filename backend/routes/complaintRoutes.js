const express = require("express");
const multer = require("multer");
const Complaint = require("../models/Complaint");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  const trackingId = Math.random().toString(36).substring(2, 8).toUpperCase();

  const complaint = new Complaint({
    ...req.body,
    image: req.file.filename,
    trackingId,
  });

  await complaint.save();
  res.json({ trackingId });
});

router.get("/public", async (req, res) => {
  const complaints = await Complaint.find().select(
    "category location status"
  );
  res.json(complaints);
});

router.get("/track/:id", async (req, res) => {
  const complaint = await Complaint.findOne({
    trackingId: req.params.id,
  });
  res.json(complaint);
});

router.get("/", auth, async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
});

router.put("/:id", auth, async (req, res) => {
  await Complaint.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

module.exports = router;