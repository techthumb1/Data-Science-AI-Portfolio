"use client";
import { useState } from "react";

export default function AIChat() {
    const [messages, setMessages] = useState<{ role: string, content: string }[]>([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input })
        });

        const data = await response.json();
        setMessages([...messages, userMessage, { role: "assistant", content: data.reply }]);
        setInput("");
    };

    return (
        <div className="relative top-5 right-4 w-[260px] bg-[#2C3E50] text-white shadow-lg rounded-lg p-2 text-sm border border-gray-700">
            <div className="h- overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`p-2 ${msg.role === "user" ? "text-blue-600" : "text-gray-700"}`}>
                        <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className="w-full p-2 border rounded mt-2"
                placeholder="Ask me anything..."
            />
            <button onClick={sendMessage} className="bg-primary text-white w-full mt-2 p-2 rounded hover:bg-accent">
                Send
            </button>
        </div>
    );
}
