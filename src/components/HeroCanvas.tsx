import React, { useEffect, useRef } from 'react';

interface CloudBlob {
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
  rotation: number;
  color: string;
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);

    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', handleResize);

    const clouds: CloudBlob[] = [
      {
        x: width * 0.3,
        y: height * 0.4,
        radiusX: Math.min(width * 0.3, 350),
        radiusY: Math.min(height * 0.25, 250),
        rotation: -0.1,
        color: 'rgba(7, 59, 58, 0.06)',
      },
      {
        x: width * 0.7,
        y: height * 0.5,
        radiusX: Math.min(width * 0.35, 400),
        radiusY: Math.min(height * 0.28, 280),
        rotation: 0.1,
        color: 'rgba(232, 225, 213, 0.5)',
      },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Soft Subtle Ambient Cloud Gradients (Static & Clean)
      clouds.forEach((cloud) => {
        ctx.save();
        ctx.translate(cloud.x, cloud.y);
        ctx.rotate(cloud.rotation);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, cloud.radiusX);
        gradient.addColorStop(0, cloud.color);
        gradient.addColorStop(1, 'rgba(245, 241, 232, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, cloud.radiusX, cloud.radiusY, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
};
