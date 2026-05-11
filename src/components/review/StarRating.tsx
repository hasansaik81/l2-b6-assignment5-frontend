"use client";

import { useState } from "react";

type Props = {
  value: number;
  onChange: (val: number) => void;
};

export default function StarRating({ value, onChange }: Props) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1 text-3xl">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= (hover || value);

        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`transition-transform duration-150 hover:scale-125 ${
              active ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}