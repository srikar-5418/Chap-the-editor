// Import required Firebase Functions and Admin SDK
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");

initializeApp();

// Import Express and create app instance
const express = require("express");
const app = express();

// Initialize Firebase Admin SDK (No API keys required for this)

import { GoogleGenerativeAI } from "@google/generative-ai";
import {SYSTEM_INFO} from './systemInfo';
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" 
  ,systemInstruction:SYSTEM_INFO.systemInfo});

app.post("/chat/",(req,res)=>{

})

// Export the app as a Firebase function
exports.appAi = onRequest(app);
