"use client";

import Image from "next/image";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

export default function Header() {
  return (
    <div>
      <header className="header">
        <Link className="flex" href="/">
          <Image
            src="/assets/logo/quizlet-icon.svg"
            alt="q icon"
            width={50}
            height={50}
          />
          <h1>uiz</h1>
        </Link>
        <BsPersonCircle className="text-2xl" />
      </header>
    </div>
  );
}
