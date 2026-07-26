import OpenAI from "openai";

// Automatically uses process.env.OPENAI_API_KEY from Vercel
const openai = new OpenAI();

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are the LizKemi AI Financial Agent. You handle loan inquiries, investment calculations, risk assessments, trading academy questions, and general company information for LizKemi Capital Firm."
                },
                { role: "user", content: message }
            ]
        });

        const reply = completion.choices[0].message.content;

        return res.status(200).json({ reply });
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return res.status(500).json({ reply: "System error: Unable to process financial agent request." });
    }
}
