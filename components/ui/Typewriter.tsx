"use client";

import * as React from "react";
import { useInView } from "framer-motion";

type TypewriterProps = {
  text: string;
  speed?: number; // ms per character
  className?: string;
};

export function Typewriter({ text, speed = 40, className = "" }: TypewriterProps) {
  const ref = React.useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = React.useState("");

  React.useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [isInView, text, speed]);

  return (
    <p ref={ref} className={"typewriter " + className}>
      {displayed}
      <span className="caret" aria-hidden>
        |
      </span>
    </p>
  );
}
