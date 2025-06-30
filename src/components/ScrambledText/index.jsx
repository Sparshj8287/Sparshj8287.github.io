"use client";
import { useEffect, useState, useRef } from "react";
import { ScrambledTextWrpr } from "./style";

const CHARS = "1234567890!@#$%^&*()";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function ScrambleTextLoop({
  texts,
  interval = 50,
  pause = 1000,
  //   className = "text-xl text-red-500 font-semibold overflow-hidden text-nowrap",
}) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("scrambling");
  const [textIndex, setTextIndex] = useState(0);

  const frameRef = useRef(0);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const currentText = texts[textIndex];

  useEffect(() => {
    const cleanup = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const runPhase = () => {
      cleanup();

      if (phase === "scrambling") {
        frameRef.current = 0;
        intervalRef.current = setInterval(() => {
          const random = Array.from({ length: currentText.length }, () =>
            randomChar()
          ).join("");
          setDisplayed(random);
          frameRef.current++;
          if (frameRef.current > 10) {
            cleanup();
            indexRef.current = 0;
            setPhase("revealing");
          }
        }, interval);
      } else if (phase === "revealing") {
        intervalRef.current = setInterval(() => {
          const revealed = currentText
            .split("")
            .map((char, i) => (i <= indexRef.current ? char : randomChar()))
            .join("");
          setDisplayed(revealed);
          indexRef.current++;
          if (indexRef.current >= currentText.length) {
            cleanup();
            setDisplayed(currentText);
            setPhase("visible");
          }
        }, interval);
      } else if (phase === "visible") {
        timeoutRef.current = setTimeout(() => {
          indexRef.current = currentText.length - 1;
          setPhase("degrading");
        }, pause);
      } else if (phase === "degrading") {
        intervalRef.current = setInterval(() => {
          const scrambled = currentText
            .split("")
            .map((char, i) => (i >= indexRef.current ? randomChar() : char))
            .join("");
          setDisplayed(scrambled);
          indexRef.current--;
          if (indexRef.current < 0) {
            cleanup();
            setTextIndex((prev) => (prev + 1) % texts.length);
            setPhase("scrambling");
          }
        }, interval);
      }
    };

    runPhase();

    return cleanup;
  }, [phase, currentText, interval, pause, texts.length]);

  return <ScrambledTextWrpr>{displayed}</ScrambledTextWrpr>;
}
