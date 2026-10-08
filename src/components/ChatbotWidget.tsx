"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-[400px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-6rem)] overflow-hidden rounded-xl shadow-2xl bg-white border border-gray-200">
          <iframe
            src="http://192.168.12.11/widget/c218be8d886a"
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            allow="clipboard-write"
            title="Chatbot"
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Tutup chat" : "Buka chat"}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
