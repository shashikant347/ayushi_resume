import { useEffect, useState } from "react";

/** Typewriter effect that cycles through `words`. */
export default function useTyped(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    let ri = 0, ci = 0, del = false, timer;
    const tick = () => {
      const w = words[ri];
      ci += del ? -1 : 1;
      setText(w.slice(0, ci));
      let d = del ? 35 : 75;
      if (!del && ci === w.length) { del = true; d = 1400; }
      else if (del && ci === 0) { del = false; ri = (ri + 1) % words.length; d = 300; }
      timer = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
