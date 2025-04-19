"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/triviaPage"); // Navigate to the triviaPage
  };

  return (
    <div>
      <button className="button" type="button" onClick={handleClick}>
        {typeof window !== "undefined" &&
        window.location.pathname === "/triviaPage"
          ? "Play Aagin"
          : "Start Playing"}
      </button>
    </div>
  );
}
