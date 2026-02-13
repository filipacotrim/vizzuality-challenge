'use client';
import { useEffect } from 'react';
import { ReactNode, useState } from "react";

type TooltipProps = {
  content: string;
  children: ReactNode;
};

export function Tooltip({ content, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);

  // Detect if it's a touch device to disable hover effects
  useEffect(() => {
    const handleTouchStart = () => setTouchDevice(true);
    window.addEventListener("touchstart", handleTouchStart);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);
  
  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => !touchDevice && setShow(true)}
      onMouseLeave={() => !touchDevice && setShow(false)}
    >
      {children}
      {show && (
        <span
          style={{
            position: "absolute",
            bottom: "120%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            color: "#000",
            padding: "0.3rem 0.7rem",
            borderRadius: "4px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            zIndex: 1000,
            pointerEvents: "none",
            touchAction: 'none',
          }}
        >
          {content}
          <span
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #ffffffff",
              touchAction: 'none',
            }}
          />
        </span>
      )}
    </span>
  );
}