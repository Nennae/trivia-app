"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/triviaPage"); // Navigate to the triviaPage
  };

  return (
    <div>
      <button className="button" type="button" aria-label="start playing" onClick={handleClick}>
        {typeof window !== "undefined" &&
        window.location.pathname === "/triviaPage"
          ? "Play Again"
          : "Start Playing"}
      </button>
    </div>
  );
}
