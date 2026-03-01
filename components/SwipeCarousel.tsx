"use client";

import React, { useRef, useState } from "react";

type Card = {
  id: string;
  title: string;
  body: string;
};

type Props = {
  cards: Card[];
};

export default function SwipeCarousel({ cards }: Props) {
  const count = cards.length;
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animating, setAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef(0);

  const visible = 3; // exactly three cards visible

  const normalize = (n: number) => ((n % count) + count) % count;

  const getCard = (offset: number) => cards[normalize(index + offset)];

  function onPointerDown(e: React.PointerEvent) {
    if (animating) return;
    (e.target as Element).setPointerCapture(e.pointerId);
    startXRef.current = e.clientX;
    setIsDragging(true);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging) return;
    const dx = e.clientX - startXRef.current;
    setDragX(dx);
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!isDragging) return;
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
    setIsDragging(false);
    commitSwipe(dragX);
  }

  function commitSwipe(finalX: number) {
    const container = containerRef.current;
    if (!container) return;
    const threshold = container.clientWidth * 0.18;

    if (finalX > threshold) {
      // swipe right -> previous card
      setAnimating(true);
      setDragX(container.clientWidth * 1.1);
      setTimeout(() => {
        setAnimating(false);
        setDragX(0);
        setIndex((s) => normalize(s - 1));
      }, 300);
    } else if (finalX < -threshold) {
      // swipe left -> next card
      setAnimating(true);
      setDragX(-container.clientWidth * 1.1);
      setTimeout(() => {
        setAnimating(false);
        setDragX(0);
        setIndex((s) => normalize(s + 1));
      }, 300);
    } else {
      // snap back
      setAnimating(true);
      setDragX(0);
      setTimeout(() => setAnimating(false), 200);
    }
  }

  function goNext() {
    if (animating) return;
    const w = containerRef.current?.clientWidth ?? 600;
    setAnimating(true);
    // animate toward the right side (user clicked right)
    setDragX(w * 1.1);
    setTimeout(() => {
      setAnimating(false);
      setDragX(0);
      setIndex((s) => normalize(s + 1));
    }, 300);
  }

  function goPrev() {
    if (animating) return;
    const w = containerRef.current?.clientWidth ?? 600;
    setAnimating(true);
    // animate toward the left side (user clicked left)
    setDragX(-w * 1.1);
    setTimeout(() => {
      setAnimating(false);
      setDragX(0);
      setIndex((s) => normalize(s - 1));
    }, 300);
  }

  const stackStyles = (pos: number) => {
    const translateY = pos * 12;
    const scale = 1 - pos * 0.04;
    const rotate = pos === 0 ? dragX / 30 : 0;
    const z = 50 - pos;
    const transform = `translate3d(${pos === 0 ? dragX : 0}px, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`;
    const transition = isDragging
      ? "none"
      : animating
      ? "transform 300ms cubic-bezier(.2,.9,.2,1)"
      : "transform 220ms cubic-bezier(.2,.9,.2,1)";

    return {
      transform,
      zIndex: z,
      transition,
      touchAction: "pan-y",
    } as React.CSSProperties;
  };

  return (
    <div className="w-full flex justify-center">
      <div ref={containerRef} className="relative w-full max-w-4xl h-[22rem] sm:h-[24rem] py-6">
        <button
          aria-label="Previous card"
          onClick={goPrev}
          className="pointer-events-auto absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 text-black rounded-full p-2 shadow-md hover:scale-105 focus:outline-none"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          aria-label="Next card"
          onClick={goNext}
          className="pointer-events-auto absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 text-black rounded-full p-2 shadow-md hover:scale-105 focus:outline-none"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {Array.from({ length: visible }).map((_, i) => {
            const card = getCard(i);
            const pos = i; // 0 top, 1 mid, 2 back
            return (
              <div
                key={card.id}
                className="pointer-events-auto absolute w-[24rem] sm:w-[38rem] aspect-[16/9] bg-white text-black rounded-2xl shadow-md px-12 py-10 m-2 flex flex-col justify-center items-center text-center"
                style={stackStyles(pos)}
                onPointerDown={pos === 0 ? onPointerDown : undefined}
                onPointerMove={pos === 0 ? onPointerMove : undefined}
                onPointerUp={pos === 0 ? onPointerUp : undefined}
              >
                <h4 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ textShadow: '0 6px 14px rgba(0,0,0,0.25)' }}>{card.title}</h4>
                <p className="text-lg sm:text-xl leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
