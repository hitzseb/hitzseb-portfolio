import React, { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const stars = [];
      const FPS = 60;
      const x = 100;
      const mouse = { x: 0, y: 0 };
  
      for (let i = 0; i < x; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1 + 1,
          vx: Math.floor(Math.random() * 50) - 25,
          vy: Math.floor(Math.random() * 50) - 25
        });
      }
  
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";
  
        for (let i = 0, len = stars.length; i < len; i++) {
          const s = stars[i];
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = 'black';
          ctx.stroke();
        }
  
        ctx.beginPath();
        for (let i = 0, len = stars.length; i < len; i++) {
          const starI = stars[i];
          ctx.moveTo(starI.x, starI.y);
          if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
          for (let j = 0, len = stars.length; j < len; j++) {
            const starII = stars[j];
            if (distance(starI, starII) < 150) {
              ctx.lineTo(starII.x, starII.y);
            }
          }
        }
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = 'white';
        ctx.stroke();
      }
  
      function distance(point1, point2) {
        const xs = point2.x - point1.x;
        const ys = point2.y - point1.y;
        return Math.sqrt(xs * xs + ys * ys);
      }
  
      function update() {
        for (let i = 0, len = stars.length; i < len; i++) {
          const s = stars[i];
          s.x += s.vx / FPS;
          s.y += s.vy / FPS;
  
          if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
          if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
      }
  
      canvas.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
  
      function tick() {
        draw();
        update();
        requestAnimationFrame(tick);
      }
  
      tick();
  
      return () => {
        // Cleanup function
        canvas.removeEventListener('mousemove', () => {});
      };
    }, []);
  
    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }} />;
  };

export default AnimatedBackground;
