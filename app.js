const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Route to handle the execute action
app.post("/execute", (req, res) => {
  const inArguments = req.body.inArguments || [];
  let foundSignupDate = "";

  // Example logic to process inArguments and produce an outArgument
  if (inArguments.length > 0) {
    const email = inArguments.find((arg) => arg.hasOwnProperty("emailAddress"));
    const phone = inArguments.find((arg) => arg.hasOwnProperty("phoneNumber"));

    if (email) {
      // Example logic to find the signup date based on email
      foundSignupDate = "2023-01-01"; // Replace with actual logic
    }
  }

  // Send the response with the outArguments
  res.status(200).json({
    outArguments: [
      {
        foundSignupDate: foundSignupDate,
      },
    ],
  });
});

// Route to handle the save action
app.post("/save", (req, res) => {
  // Logic to handle the save action
  console.log("Save request received:", req.body);
  res.status(200).send("Save action completed");
});

// Route to handle the publish action
app.post("/publish", (req, res) => {
  // Logic to handle the publish action
  console.log("Publish request received:", req.body);
  res.status(200).send("Publish action completed");
});

// Route to handle the validate action
app.post("/validate", (req, res) => {
  // Logic to handle the validate action
  console.log("Validate request received:", req.body);
  res.status(200).send("Validate action completed");
});

// Route to handle the stop action
app.post("/stop", (req, res) => {
  // Logic to handle the stop action
  console.log("Stop request received:", req.body);
  res.status(200).send("Stop action completed");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
