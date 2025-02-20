import { ReactNode, Ref, useState } from 'react';

export default function Carrousel({ children }: { children: ReactNode }) {
  const [margin, setMargin] = useState(16);

  const refCallback: Ref<HTMLDivElement> = (node) => {
    const observer = new ResizeObserver((entries) =>
      entries.forEach((entry) =>
        setMargin(
          entry.target.parentElement?.getBoundingClientRect().left || 16,
        ),
      ),
    );

    observer.observe(node as HTMLDivElement);
    return () => observer.disconnect();
  };

  return (
    <div
      className="flex h-[420px] w-dvw flex-row gap-8 overflow-y-auto pt-2 pb-8"
      style={{
        marginLeft: -margin,
        paddingInline: margin,
      }}
      ref={refCallback}
    >
      {children}
    </div>
  );
}
