import { useEffect, useRef } from "react";

/**
 * Fades/slides an element in (adds the `in` class) the first time it scrolls into view.
 * `onReveal` receives the element, handy for triggering counters.
 */
export default function Reveal({ as: Tag = "div", className = "", onReveal, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            onReveal?.(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={`${className} rv`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
