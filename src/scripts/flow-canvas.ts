document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("flow-canvas") as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext("2d")!;
  const setSize = () => {
    const rect = canvas.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height, 400);
    canvas.width = size;
    canvas.height = size;
  };
  setSize();

  class Particle {
    x: number;
    y: number;
    angle: number;
    radius: number;
    speed: number;
    size: number;
    opacity: number;

    constructor() {
      const angle = Math.random() * Math.PI * 2;
      const radius = 80 + Math.random() * 40;
      this.x = canvas.width / 2 + Math.cos(angle) * radius;
      this.y = canvas.height / 2 + Math.sin(angle) * radius;
      this.angle = angle;
      this.radius = radius;
      this.speed = 0.02 + Math.random() * 0.01;
      this.size = 2 + Math.random() * 3;
      this.opacity = 0.3 + Math.random() * 0.5;
    }
    update() {
      this.angle += this.speed;
      this.x = canvas.width / 2 + Math.cos(this.angle) * this.radius;
      this.y = canvas.height / 2 + Math.sin(this.angle) * this.radius;
    }
    draw() {
      ctx.fillStyle = `rgba(60, 60, 60, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const particles: Particle[] = Array.from({ length: 100 }, () => new Particle());

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  };

  window.addEventListener("resize", setSize);
  animate();
});
