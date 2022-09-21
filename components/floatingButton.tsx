import React from "react";
import Link from "next/link";

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({
  children,
  href,
}: FloatingButtonProps) {
  return (
    <Link href={href}>
      <a className="fixed bottom-24 right-5 bg-orange-400 shadow-xl rounded-full p-4 text-white hover:bg-orange-500 transition-colors cursor-pointer">
        {children}
      </a>
    </Link>
  );
}
