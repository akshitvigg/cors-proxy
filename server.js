const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
const PORT = 5000;


app.get("/proxy/manga/*", async (req, res) => {
  const path = req.params[0];
  try {
    const response = await axios.get(
      `https://consumet-api-9p6q.onrender.com/manga/${path}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
