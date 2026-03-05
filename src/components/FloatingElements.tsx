import { motion } from 'motion/react';

export function FloatingElements() {
  const elements = [
    { size: 100, duration: 20, delay: 0, x: '10%', y: '20%' },
    { size: 150, duration: 25, delay: 2, x: '80%', y: '30%' },
    { size: 80, duration: 18, delay: 1, x: '60%', y: '70%' },
    { size: 120, duration: 22, delay: 3, x: '20%', y: '80%' },
    { size: 90, duration: 19, delay: 1.5, x: '90%', y: '60%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
}
