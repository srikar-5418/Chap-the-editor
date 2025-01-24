import { GoogleGenerativeAI } from "@google/generative-ai";
import {SYSTEM_INFO} from './systemInfo.js'
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" 
  ,systemInstruction:SYSTEM_INFO.systemInfo});

export default async function ResetChat(){
    const chat = await model.startChat();
      return chat;
   
}