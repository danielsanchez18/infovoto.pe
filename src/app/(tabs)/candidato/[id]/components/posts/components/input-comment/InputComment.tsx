import { Send } from "lucide-react";
import React from "react";

export const InputComment = () => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="min-w-10 h-10 bg-gray-300 rounded-full contain-content">
        <img
          src="https://avatars.githubusercontent.com/u/148911330?v=4"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full">
        <input
          type="text"
          placeholder="Añadir un comentario..."
          className="px-5 py-3 pr-14 border border-gray-300 rounded-full text-sm w-full"
        />

        <button className="absolute top-1.5 right-3 text-white bg-primary rounded-full p-2 hover:opacity-90">
          <Send className="size-4" />
        </button>
      </div>
    </div>
  );
};
