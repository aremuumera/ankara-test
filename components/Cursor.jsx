import { useEffect, useRef } from "react";

import { useLive } from "@/context/LiveProvider";

const Cursor = ({ x, y, color, message, type }) => {
  const { myPresence, cursorState, setCursorState, updateMyPresence } = useLive();
  const timeoutRef = useRef(null);

  const handleUpdate = (e) => {
    updateMyPresence({ message: e.target.value });

    setCursorState({
      mode: "chat",
      previousMessage: null,
      message: e.target.value,
    });

    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (cursorState.mode === "chat" && cursorState.message) {
      timeoutRef.current = setTimeout(() => {
        setCursorState({ mode: "hidden" });
        updateMyPresence({ message: null });
      }, 10000);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [cursorState, setCursorState, updateMyPresence]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCursorState({
        mode: "chat",
        previousMessage: cursorState.message,
        message: e.target.value,
      });

      clearTimeout(timeoutRef.current);
    } else if (e.key === "Escape") {
      setCursorState({
        mode: "hidden",
      });
    }
  };

  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-50"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      {/* //TODO Can be extracted somewhere and provided. We can figure something out to do with hte color.  */}
      {type !== "user" && (
        <svg
          className="relative"
          width="24"
          height="36"
          viewBox="0 0 24 36"
          fill="none"
          stroke="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
            fill={color}
          />
        </svg>
      )}

      {cursorState?.mode === "chat" && type === "user" && myPresence.cursor && (
        <div
          className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-2xl"
          onKeyUp={(e) => e.stopPropagation()}
        >
          {cursorState.previousMessage && <div>{cursorState.previousMessage}</div>}

          <input
            className="w-60 border-none	bg-transparent text-white outline-none placeholder:text-blue-300"
            autoFocus={true}
            onChange={handleUpdate}
            onKeyDown={handleKeyDown}
            placeholder={cursorState.previousMessage ? "" : "Say something…"}
            value={cursorState.message || ""}
            maxLength={50}
          />
        </div>
      )}

      {message && (
        <div
          className="absolute left-2 top-5 rounded-3xl px-4 py-2"
          style={{ backgroundColor: color }}
        >
          <p className="whitespace-nowrap text-sm leading-relaxed text-white">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cursor;
