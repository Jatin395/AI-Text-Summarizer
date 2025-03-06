const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateContent(prompt, summaryLength = "medium") {

    let systemInstruction = `
    You are an AI assistant designed to summarize long texts. Your response should be direct, concise, and include emojis to make the summary more engaging. 

    1. **Describe the content**: Briefly describe the topic of the text (1-2 sentences) 📝.
    
    2. **Bullet Points**: Extract key points and present them as bullet points. Focus on the most important aspects of the text ⚡.

    3. **Highlight Key Sections**: Identify crucial sentences or phrases that represent the most significant parts 💡.

    4. **Clarity**: Ensure the summary is easy to understand and clear 🧠.
    
    `;

    if (summaryLength === "short") {
        systemInstruction += `
        The summary should be concise, ideally around 3-5 bullet points 📌.
        `;
    } else if (summaryLength === "long") {
        systemInstruction += `
        The summary should be detailed, including more in-depth bullet points and potentially examples 📚.
        `;
    } else {
        systemInstruction += `
        The summary should be of medium length, providing clear bullet points without excessive elaboration 🎯.
        `;
    }

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: systemInstruction,
    });

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // Modify to remove extra explanation and just return the content directly
    return responseText.replace(/Okay, I will provide a summary of the provided text\./, "").trim();
}

module.exports = generateContent;
