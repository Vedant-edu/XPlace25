import { useState } from "react";
import { X } from "lucide-react";

export default function Pop() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative w-96 h-[550px] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Advertise Strip */}
        <div className="w-full bg-gray-400 h-10 text-center text-sm font-semibold text-gray-700 py-2">
          Advertisement
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-gray-300"
        >
          <X size={30} />
        </button>
        <a href="https://www.instagram.com/share/BAOZrL7tT3" target="_blank" rel="noopener noreferrer">
          <img
            src="https://github.com/Vedant-edu/Images/blob/main/WhatsApp%20Image%202025-02-21%20at%208.02.56%20PM.jpeg?raw=true"
            alt="Ad Banner"
            className="w-full h-[450px] rounded-b-sm"
          />
          <div className="p-4 text-center text-gray-800 font-semibold">
            Click to contact SK Circuit Crafters <br /><div className="text-[10px]">
            Phone : 8010849335
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
