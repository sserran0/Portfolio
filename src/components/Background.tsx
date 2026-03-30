"use client";

import { useEffect, useRef } from "react";

export default function Background(){
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationID: number;
        const particles: { x: number; y: number; size: number; speed: number; opacity: number; twinkle: number } [] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();

        window.addEventListener("resize", resize);

        for (let i = 0; i < 80; i++){
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.floor(Math.random() * 2) + 1,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.1,
                twinkle: Math.random() * Math.PI * 2,
            });
        }

        const drawParticle = (x: number, y: number, size: number, opacity: number) => {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        };
   
        const animate = () => {
            ctx.clearRect(0, 0,canvas.width, canvas.height);
            const time = Date.now() * 0.001;

        for (const p of particles) {
        const flicker = Math.sin(time * 1.5 + p.twinkle) * 0.3 + 0.7;
        const currentOpacity = p.opacity * flicker;

        drawParticle(p.x, p.y, p.size, currentOpacity);

        p.y += p.speed;
        p.x += Math.sin(p.y * 0.005) * 0.2;

        if (p.y > canvas.height + 10) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      }
      animationID = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationID);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
