"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize AOS for scroll animations (client-side only)
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 100,
        disable: false,
      });
    }

    // Refresh AOS on content changes
    const handleLoad = () => {
      AOS.refresh();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return <>{children}</>;
}
