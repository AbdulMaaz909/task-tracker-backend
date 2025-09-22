import { chatWithGemini } from "../../controllers/ChatbotController/chatbot.controller.js";
import express from "express"

const route = express()

route.post("/chat" , chatWithGemini)

export default route