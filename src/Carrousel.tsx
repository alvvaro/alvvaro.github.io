import { ReactNode, useEffect, useRef, useState } from 'react';

function Carrousel({ children }: { children: ReactNode }) {
  const [margin, setMargin] = useState(16);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const rowRef = useRef<HTMLDivElement | null>(null);
  const tickingRef = useRef(false);

  const moveLeft = () => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: rowRef.current.offsetWidth * -0.5,
      behavior: 'smooth',
    });
  };

  const moveRight = () => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: rowRef.current.offsetWidth * 0.5,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!rowRef.current) return;

    const observer = new ResizeObserver((entries) =>
      entries.forEach((entry) => {
        setMargin(
          entry.target.parentElement?.getBoundingClientRect().left || 16,
        );
      }),
    );

    observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!rowRef.current) return;
    const div = rowRef.current;

    const listenerCallback = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          tickingRef.current = false;

          const div = rowRef.current;
          if (!div) return;

          setCanScrollLeft(div.scrollLeft !== 0);
          setCanScrollRight(
            div.scrollLeft !== div.scrollWidth - div.offsetWidth,
          );
        });

        tickingRef.current = true;
      }
    };

    div.addEventListener('scroll', listenerCallback);
    return () => div.removeEventListener('scroll', listenerCallback);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="scrollbar flex w-dvw flex-row items-start gap-8 overflow-y-auto pt-2 pb-6 *:shrink-0"
        style={{
          marginLeft: -margin,
          paddingInline: margin,
        }}
        ref={rowRef}
      >
        {children}
      </div>
      <div className="flex *:flex-1">
        <button
          onClick={moveLeft}
          disabled={!canScrollLeft}
          className="hover:not-disabled:bg-black/5 disabled:opacity-25"
        >
          ←
        </button>
        <button
          onClick={moveRight}
          disabled={!canScrollRight}
          className="hover:not-disabled:bg-black/5 disabled:opacity-25"
        >
          →
        </button>
      </div>
    </div>
  );
}

Carrousel.Image = function Image({ src }: { src: string }) {
  return (
    <div className="block h-96 min-w-96 shadow-md">
      <img src={src} className="h-full w-full object-cover" />
    </div>
  );
};

export default Carrousel;

//
// h-[420px]
