"use client";

import Image from "next/image";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

export default function Header() {
  return (
    <div>
      <header className="header">
        <Link className="flex items-center" href="/">
          {/* Light mode logo */}
          <Image
            src="/assets/logo/quizlet-icon-light.svg"
            alt="q icon light"
            width={50}
            height={50}
            className="hidden dark:block"
          />
          {/* Dark mode logo */}
          <Image
            src="/assets/logo/quizlet-icon-dark.svg"
            alt="q icon dark"
            width={50}
            height={50}
            className="block dark:hidden"
          />
          <h1>uiz</h1>
        </Link>
        <BsPersonCircle className="text-2xl" />
      </header>
    </div>
  );
}
