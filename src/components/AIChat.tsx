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
    <div className="relative top-5 right-4 w-[260px] bg-[#2C3E50] text-white shadow-lg rounded-lg p-2 text-sm border border-gray-700">
      <div className="h-[160] overflow-y-auto pr-1">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.role === "user" ? "text-blue-400" : "text-gray-200"}`}>
            <strong>{msg.role === "user" ? "You" : "Jason"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded mt-2 text-black"
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage} className="bg-primary text-white w-full mt-2 p-2 rounded hover:bg-accent transition-all">
        Send
      </button>
    </div>
  );
}
