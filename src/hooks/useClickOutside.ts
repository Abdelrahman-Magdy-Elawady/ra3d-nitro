import { useRef, useEffect } from "react";
export default function useClickOutside(doWhenClickOutside: () => void) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(e.target as Node)) {
        doWhenClickOutside();
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler);
  }, [doWhenClickOutside]);
  return ref;
}
