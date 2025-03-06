const generateContent = require('../services/ai.service');

exports.generateSummary = async (req, res) => {
    const { text, summaryLength } = req.body;

    if (!text) {
        return res.status(400).json({ message: "Text is required" });
    }
    const result = await generateContent(text, summaryLength);
    res.status(200).json({ result });
}