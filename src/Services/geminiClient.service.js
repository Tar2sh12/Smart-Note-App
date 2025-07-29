import { GoogleGenerativeAI } from '@google/generative-ai';

export const geminiService = () => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: process.env.MODEL_TYPE });
    return model;
}
