'use client';

import { useEffect, useRef } from 'react';

export default function ScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrameIndexRef.current);
    };

    window.addEventListener('resize', setCanvasSize);

    const frameCount = 300;
    const currentFrame = (index: number) =>
      `/ezgif-8fd7b8f6b915ab05-jpg/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.webp`;

    const images: HTMLImageElement[] = [];

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);

      if (i === 0) {
        img.onload = () => {
          setCanvasSize();
          renderFrame(0);
        };
      }
    }

    const currentFrameIndexRef = { current: 0 };

    function renderFrame(index: number) {
      if (images[index] && images[index].complete) {
        const hRatio = canvas!.width / images[index].width;
        const vRatio = canvas!.height / images[index].height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas!.width - images[index].width * ratio) / 2;
        const centerShift_y = (canvas!.height - images[index].height * ratio) / 2;

        context!.clearRect(0, 0, canvas!.width, canvas!.height);
        context!.drawImage(
          images[index],
          0, 0, images[index].width, images[index].height,
          centerShift_x, centerShift_y, images[index].width * ratio, images[index].height * ratio
        );
      }
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScrollTop <= 0) return;

      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(scrollFraction * frameCount))
      );

      if (frameIndex !== currentFrameIndexRef.current) {
        currentFrameIndexRef.current = frameIndex;
        requestAnimationFrame(() => renderFrame(frameIndex));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 pointer-events-none opacity-95"
    />
  );
}
