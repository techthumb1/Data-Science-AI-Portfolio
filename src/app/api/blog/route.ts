const cachedSummaries = new Map(); // Caches OpenAI responses


export async function GET() {
    const blogPosts = [
        { 
          id: "1", 
          title: "Automating Medical Image Annotation with SA-LfV", 
          slugs: "ai-healthcare", 
          description: "Enhancing Object Detection in Medical Imaging with Self-Annotated Labeling from Videos (SA-LfV).", 
          content: "How AI is transforming medical image annotation...",
          image: "/images/automation.png",
          url: "https://medium.com/@robinsonjason761/automating-medical-image-annotation-with-sa-lfv-43e734354336"
        },
        { 
          id: "2", 
          title: "Stroke Risk Prediction Using Machine Learning", 
          slugs: "stroke-risk-prediction",
          description: "An End-to-End AI Pipeline for Predicting Stroke Risk Using Clinical Data.",
          content: "Exploring machine learning algorithms for stroke risk prediction...",
          image: "/images/stroke-risk.png",
          url: "https://medium.com/@robinsonjason761/stroke-risk-prediction-using-machine-learning-9213dbff5599"
        },
        {
          id: "3",
          title: "ARIMA Method for Time-Series Forecasting",
          slugs: "time-series-forecasting",
          description: "ARIMA model for 10-year US bond yield rates.",
          content: "How ARIMA models are used for time-series forecasting...",
          image: "/images/time-series-forecasting.png",
          url: "https://medium.com/@robinsonjason761/arima-method-for-time-series-forecasting-185b85539a38"
        },
        {
          id: "4",
          title: "Augmentation-Adaptive Contrastive Learning with ScoreCL",
          slugs: "adaptive-contrastive-learning",
          description: "Using Score Functions to Refine Training.",
          content: "Understanding augmentation-adaptive contrastive learning...",
          image: "/images/abstract.png",
          url: "https://medium.com/@robinsonjason761/augmentation-adaptive-contrastive-learning-with-scorecl-8891e05e3908"
        }
      ];
      

      const summarizedPosts = await Promise.all(
        blogPosts.map(async (post) => {
            if (cachedSummaries.has(post.id)) {
                return { ...post, summary: cachedSummaries.get(post.id) };
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
                cachedSummaries.set(post.id, summary);

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