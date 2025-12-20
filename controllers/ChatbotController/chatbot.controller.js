import axios from "axios"

const chatWithGemini = async (req, res) => {
//   try {
//     const { message, history } = req.body;
//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     const API_KEY = process.env.GEMINI_API_KEY;
//     const GEMINI_URL =
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
//       API_KEY;

//     // Prepare conversation context
//     const payload = {
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: message }],
//         },
//         // Optional previous messages to maintain context
//         ...(history || []),        
//       ],
//       generationConfig: {
//     // maxOutputTokens: 60,   // roughly ~40–50 words
//     temperature: 0.7       // optional: keeps answers focused
//   }
//     };

//     const { data } = await axios.post(GEMINI_URL, payload, {
//       headers: { "Content-Type": "application/json" },
//     });

//     const reply =
//       data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

//     res.json({ reply });
//   } catch (error) {
//     console.error("Gemini API error:", error.response?.data || error.message);
//     res.status(500).json({
//       error: "Failed to fetch response from Gemini",
//       details: error.response?.data || error.message,
//     });
//   }
};
export {
  chatWithGemini
};