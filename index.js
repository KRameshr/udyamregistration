// import express from "express";
// import cors from "cors";
// import { PrismaClient } from "@prisma/client";

// const app = express();
// const prisma = new PrismaClient();

// app.use(cors());
// app.use(express.json());

// app.post("/submit", async (req, res) => {
//   try {
//     const { aadhaarNumber, ownerName, declarationA } = req.body;

//     // Basic validation example
//     if (!aadhaarNumber || !ownerName) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // Save to MongoDB via Prisma
//     const registration = await prisma.udyamRegistration.create({
//       data: {
//         aadhaarNumber,
//         ownerName,
//         declarationA: declarationA || false,
//       },
//     });

//     res
//       .status(201)
//       .json({ message: "Form submitted successfully", registration });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require("express");
// const cors = require("cors");
// const { PrismaClient } = require("@prisma/client");

// const app = express();
// const prisma = new PrismaClient();

// app.use(cors());
// app.use(express.json());

// // POST route to save registration
// app.post("/submit", async (req, res) => {
//   const { aadhaarNumber, ownerName, declarationA } = req.body;

//   try {
//     const registration = await prisma.registration.create({
//       data: {
//         aadhaarNumber,
//         ownerName,
//         declarationA,
//       },
//     });
//     res.json({ message: "Form submitted successfully", registration });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to submit form" });
//   }
// });

// // GET route to fetch all registrations
// app.get("/registrations", async (req, res) => {
//   try {
//     const registrations = await prisma.udyamRegistration.findMany({
//       orderBy: { createdAt: "desc" },
//     });
//     res.json(registrations);
//   } catch (err) {
//     console.error("Error fetching registrations:", err);
//     res.status(500).json({ error: "Failed to fetch registrations" });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 4090;
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// POST route to save registration
app.post("/submit", async (req, res) => {
  const { aadhaarNumber, ownerName, declarationA } = req.body;

  try {
    const registration = await prisma.UdyamRegistration.create({
      data: {
        aadhaarNumber,
        ownerName,
        declarationA,
      },
    });
    res.json({ message: "Form submitted successfully", registration });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

// GET route to fetch all registrations
app.get("/registrations", async (req, res) => {
  try {
    const registrations = await prisma.UdyamRegistration.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(registrations);
  } catch (err) {
    console.error("Error fetching registrations:", err);
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
});

app.post("/verify-pan-otp", (req, res) => {
  const { pan, otp } = req.body;

  if (!pan || !otp) {
    return res.status(400).json({ error: "PAN and OTP are required" });
  }

  if (otp === "123456") {
    return res.json({ success: true, message: "OTP verified successfully" });
  } else {
    return res.status(400).json({ success: false, error: "Invalid OTP" });
  }
});

// Start the server
const PORT = process.env.PORT || 4090;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
