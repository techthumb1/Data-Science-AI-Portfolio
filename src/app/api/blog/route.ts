const cachedSummaries = new Map(); // Caches OpenAI responses

export const runtime = "edge";

export async function GET() {
    const blogPosts = [
        { 
            id: "1", 
            title: "Automating Medical Image Annotation with SA-LfV", 
            slug: "ai-healthcare", 
            description: "Enhancing Object Detection in Medical Imaging with Self-Annotated Labeling from Videos (SA-LfV).", 
            content: "How AI is transforming medical image annotation...",
            image: "/images/automation.png"
        },
        { 
            id: "2", 
            title: "Stroke Risk Prediction Using Machine Learning", 
            slug: "stroke-risk-prediction",
            description: "An End-to-End AI Pipeline for Predicting Stroke Risk Using Clinical Data.",
            content: "Exploring machine learning algorithms for stroke risk prediction...",
            image: "/images/stroke-risk.png"
        },
        {
            id: "3",
            title: "ARIMA Method for Time-Series Forcasting",
            slug: "time-series-forecasting",
            description: "ARIMA model for 10-year US bond yield rates.",
            content: "How ARIMA models are used for time-series forecasting...",
            image: "/images/time-series-forecasting.png"
        },
        {
            id: "4",
            title: "Augmentation-Adaptive Contrastive Learning with ScoreCL",
            slug: "adaptive-contrastive-learning",
            description: "Using Score Functions to Refine Training.",
            content: "Understanding augmentation-adaptive contrastive learning...",
            image: "/images/abstract.png"
        }
    ];

    const summarizedPosts = await Promise.all(
        blogPosts.map(async (post) => {
            if (cachedSummaries.has(post.id)) {
                return { ...post, summary: cachedSummaries.get(post.id) }; // Use cached summary
            }

            try {
                const res = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: "gpt-4",
                        messages: [{ role: "system", content: `Summarize this: ${post.content}` }],
                        temperature: 0.5
                    })
                });

                const data = await res.json();
                const summary = data.choices[0]?.message?.content || "Summary not available.";

                cachedSummaries.set(post.id, summary); // Cache the summary

                return { ...post, summary };
            } catch (error) {
                console.error("Error fetching summary:", error);
                return { ...post, summary: "Error fetching summary." };
            }
        })
    );

    return new Response(JSON.stringify(summarizedPosts), {
        headers: { "Content-Type": "application/json" },
    });
}
