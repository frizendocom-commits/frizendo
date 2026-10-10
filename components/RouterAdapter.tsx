"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function isInternal(href: string): boolean {
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http:") ||
    href.startsWith("https:") ||
    href.startsWith("//") ||
    href.startsWith("/api/")
  ) {
    return false;
  }
  if (/\.(html?|png|jpe?g|svg|webp|gif|ico|css|js|json|webmanifest|pdf|txt|mp4|webm)$/i.test(href)) {
    return false;
  }
  return true;
}

export default function RouterAdapter() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as Element | null;
      const anchor = target && target.closest && target.closest("a");
      if (!anchor) return;
      const raw = anchor.getAttribute("href");
      if (!raw || !isInternal(raw)) return;
      const safeHref = raw.replace(/^\.\//, "/");
      e.preventDefault();
      router.push(safeHref);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}