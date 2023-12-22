const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/dbConfig");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  // cors({
  //   origin: ["http://localhost:5001"],
  //   methods: ["GET", "POST", "PUT", "DELETE"],
  //   credentials: true,
  // })
  cors()
);
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDb();
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/barangayofficials", require("./routes/barangayOfficialsRoutes"));
app.use("/api/skmembers", require("./routes/skRoutes"));
app.use("/api/householdrecords", require("./routes/householdRecordRoutes"));
app.use("/api/residents", require("./routes/residentRoutes"));
app.use("/api/feedbacks", require("./routes/feedbackRoutes"));
app.use("/api/announcements", require("./routes/announcementRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
