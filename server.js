import express from "express";
import cors from "cors";
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// Gemini client (SERVER ONLY)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// route
app.post("/api/movies", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }
// const models = await ai.models.list();
// console.log(models);
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
List 5 popular movies that match the following query:
"${query}"

Rules:
- Only movie names
- One per line
- No explanation
- Prefer mainstream films
      `,
    });

    const movies = response.text
      .split("\n")
      .map(m => m.trim())
      .filter(Boolean);

    res.json({ movies });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gemini request failed" });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
