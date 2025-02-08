import { useState } from "react";
import { X } from "lucide-react";

export default function Pop() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative w-80 h-80 bg-white rounded-2xl shadow-lg overflow-hidden">
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
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=939,fit=crop/mP42rVZgB1cJavB0/insights-1-AwvDbXazxLfDe17j.png"
            alt="Ad Banner"
            className="w-full h-2/3 object-cover"
          />
          <div className="p-4 text-center text-gray-800 font-semibold">
            Click to Checkout new magazine by TechSphere Insights!
          </div>
        </a>
      </div>
    </div>
  );
}
