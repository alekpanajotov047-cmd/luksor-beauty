"use client";

import { useState } from "react";

type SmartImageProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
};

/**
 * Показва снимката от `src`. Докато тя зареди (или ако липсва / дава грешка),
 * се вижда елегантен плейсхолдър — така никога няма празни/счупени картинки.
 */
export function SmartImage({ src, alt, className }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-champagne/40"
        aria-hidden={loaded ? "true" : undefined}
        role={showImage ? undefined : "img"}
        aria-label={showImage ? undefined : alt}
      />

      {showImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
