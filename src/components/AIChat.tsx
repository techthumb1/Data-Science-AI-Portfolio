"use client";
import { useState } from "react";

const fallbackMessages = [
  "Feel free to follow up if you'd like more info.",
  "Reach out if you're curious to learn more.",
  "I'm happy to chat more—just send a message!",
  "Let's connect further via email if you're interested.",
];

const responseMap: { keywords: string[]; response: string }[] = [
  {
    keywords: ["advanced project", "most advanced", "cutting-edge"],
    response:
      "The Image-Based Diagnostic Assistant is one of my most advanced projects—it uses real-time AI for segmentation and classification.",
  },
  {
    keywords: ["favorite", "favourite", "fav project", "like best"],
    response:
      "My favorite project is Vet360 AI – a transformative platform built for the Animal Health industry, integrating diagnostics, data science, and compliance.",
  },
  {
    keywords: ["resume", "cv", "experience"],
    response:
      "You can download my resume directly from the homepage using the 'Download Resume' button.",
  },
  {
    keywords: ["contact", "email", "reach", "connect"],
    response:
      "Sure! You can reach me at robinsonjason761@gmail.com or through the contact page on this site.",
  },
  {
    keywords: ["data science", "data scientist"],
    response:
      "I have extensive experience in data science, working on projects involving predictive modeling, data visualization, and big data analytics.",
  },
  {
    keywords: ["machine learning", "ml"],
    response:
      "Machine learning is a core area of my expertise, with experience in supervised, unsupervised, and reinforcement learning techniques.",
  },
  {
    keywords: ["deep learning", "neural networks"],
    response:
      "I have worked on deep learning projects using frameworks like TensorFlow and PyTorch, focusing on computer vision and NLP applications.",
  },
  {
    keywords: ["AI", "artificial intelligence"],
    response:
      "Artificial Intelligence is my passion, and I have developed AI solutions for industries like healthcare, finance, and education.",
  },
  {
    keywords: ["goals", "career goals"],
    response:
      "My career goals include advancing AI research and building innovative solutions that solve real-world problems.",
  },
  {
    keywords: ["algorithms", "best algorithm"],
    response:
      "Choosing the best algorithm depends on the problem. For classification, Random Forest or Gradient Boosting often works well, while for regression, Linear Regression or XGBoost are great choices.",
  },
  {
    keywords: ["supervised learning"],
    response:
      "Supervised learning involves training models on labeled data. Examples include classification and regression tasks.",
  },
  {
    keywords: ["unsupervised learning"],
    response:
      "Unsupervised learning is used for tasks like clustering and dimensionality reduction, where the data is unlabeled.",
  },
  {
    keywords: ["python years experience"],
    response:
      "I have over 5 years of experience with Python, using it for data analysis, machine learning, and software development.",
  },
  {
    keywords: ["best algorithm for classification"],
    response:
      "For classification tasks, algorithms like Random Forest, Support Vector Machines, and Neural Networks are often effective.",
  },
  {
    keywords: ["best for regression"],
    response:
      "For regression tasks, Linear Regression, Ridge Regression, and Gradient Boosting are commonly used.",
  },
  {
    keywords: ["linear algebra"],
    response:
      "Linear algebra is fundamental to machine learning, especially in understanding concepts like matrix operations and eigenvalues.",
  },
  {
    keywords: ["cloud computing", "cloud platforms"],
    response:
      "I have experience with cloud platforms like AWS, Azure, and Google Cloud for deploying scalable machine learning models.",
  },
  {
    keywords: ["natural language processing", "nlp"],
    response:
      "I have worked on NLP projects involving text classification, sentiment analysis, and language generation using transformers.",
  },
  {
    keywords: ["computer vision"],
    response:
      "In computer vision, I have developed models for image classification, object detection, and image segmentation.",
  },
  {
    keywords: ["big data", "data engineering"],
    response:
      "I have experience in big data technologies like Hadoop and Spark, as well as building ETL pipelines for data engineering tasks.",
  },
  {
    keywords: ["time series", "forecasting"],
    response:
      "I have worked on time series forecasting projects using ARIMA, LSTM, and Prophet models.",
  },
  {
    keywords: ["recommendation systems"],
    response:
      "I have built recommendation systems using collaborative filtering, content-based filtering, and hybrid approaches.",
  },
  {
    keywords: ["optimization", "hyperparameter tuning"],
    response:
      "I use techniques like Grid Search, Random Search, and Bayesian Optimization for hyperparameter tuning.",
  },
  {
    keywords: ["transfer learning"],
    response:
      "Transfer learning allows leveraging pre-trained models like BERT or ResNet to solve specific tasks with less data.",
  },
];

export default function AIChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [fallbackCount, setFallbackCount] = useState(0);
  const [hasShownEmail, setHasShownEmail] = useState(false);

  const getReply = (message: string): string => {
    const lower = message.toLowerCase();

    for (const { keywords, response } of responseMap) {
      if (keywords.some((key) => lower.includes(key))) {
        return response;
      }
    }

    // First fallback includes email
    if (!hasShownEmail) {
      setHasShownEmail(true);
      return "I'm unable to answer that right now. Please reach out via email at robinsonjason761@gmail.com for more info.";
    }

    // Rotate fallback messages
    const msg = fallbackMessages[fallbackCount % fallbackMessages.length];
    setFallbackCount(fallbackCount + 1);
    return msg;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const reply = getReply(input);
    const assistantMessage = { role: "assistant", content: reply };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
  };

  return (
    <div className="relative top-5 right-6 w-[300px] bg-[#2C3E50] text-white shadow-lg rounded-lg p-2 text-sm border border-gray-700">
      <div className="h-[160] overflow-y-auto pr-1">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.role === "user" ? "text-blue-400" : "text-gray-200"}`}>
        <strong>{msg.role === "user" ? "You" : "Jason"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <h2 className="text-lg font-bold mb-2 text-center">AI Chat Assistant</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded mt-1 text-black"
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage} className="bg-primary text-white w-full mt-2 p-2 rounded hover:bg-accent transition-all">
        Send
      </button>
    </div>
  );
}
