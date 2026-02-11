// import { useEffect, useState, useRef } from "react";

// const CursorFollower = () => {
//   const [position, setPosition] = useState({ x: 100, y: 100 });
//   const [targetPosition, setTargetPosition] = useState({ x: 100, y: 100 });
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isMoving, setIsMoving] = useState(false);
//   const [cursorStopped, setCursorStopped] = useState(false);
//   const [floatOffset, setFloatOffset] = useState({ x: 0, y: 0 });
//   const requestRef = useRef<number>();
//   const cursorTimeoutRef = useRef<NodeJS.Timeout>();
//   const timeRef = useRef(0);

//   // Track mouse position - detect when cursor stops
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setTargetPosition({ x: e.clientX, y: e.clientY });
//       setCursorStopped(false);
      
//       if (cursorTimeoutRef.current) {
//         clearTimeout(cursorTimeoutRef.current);
//       }
      
//       cursorTimeoutRef.current = setTimeout(() => {
//         setCursorStopped(true);
//       }, 100);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
//     };
//   }, []);

//   // Animation loop - organic floating movement
//   useEffect(() => {
//     const animate = () => {
//       timeRef.current += 0.02;
      
//       // Natural floating wobble using sine waves
//       const wobbleX = Math.sin(timeRef.current * 2) * 3;
//       const wobbleY = Math.cos(timeRef.current * 1.5) * 4;
//       setFloatOffset({ x: wobbleX, y: wobbleY });
      
//       setPosition((prev) => {
//         const dx = targetPosition.x - prev.x - 40;
//         const dy = targetPosition.y - prev.y - 40;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         // Move towards cursor when cursor has stopped
//         if (cursorStopped && distance > 15) {
//           setIsFlipped(dx < 0);
//           setIsMoving(true);
          
//           // Slow organic floating speed
//           const speed = 0.015;
          
//           // Add slight curve to path using perpendicular offset
//           const angle = Math.atan2(dy, dx);
//           const curve = Math.sin(timeRef.current * 3) * 0.3;
//           const curveX = Math.cos(angle + Math.PI / 2) * curve;
//           const curveY = Math.sin(angle + Math.PI / 2) * curve;
          
//           return {
//             x: prev.x + dx * speed + curveX,
//             y: prev.y + dy * speed + curveY,
//           };
//         } else if (distance <= 15) {
//           setIsMoving(false);
//         }
//         return prev;
//       });

//       requestRef.current = requestAnimationFrame(animate);
//     };

//     requestRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (requestRef.current) {
//         cancelAnimationFrame(requestRef.current);
//       }
//     };
//   }, [targetPosition, cursorStopped]);

//   return (
//     <div
//       className="fixed pointer-events-none z-[9999]"
//       style={{
//         left: position.x + floatOffset.x,
//         top: position.y + floatOffset.y,
//         transform: `scaleX(${isFlipped ? -1 : 1})`,
//         transition: "transform 0.3s ease",
//       }}
//     >
//       {/* Standing - shown when idle */}
//       <img
//         src="/sanji-stand.png"
//         alt="Sanji standing"
//         className="w-24 h-24"
//         style={{
//           imageRendering: "pixelated",
//           mixBlendMode: "multiply",
//           display: isMoving ? "none" : "block",
//         }}
//       />
//       {/* Moving - shown when traveling to cursor */}
//       <img
//         src="/sanji.gif"
//         alt="Sanji moving"
//         className="w-24 h-24"
//         style={{
//           imageRendering: "pixelated",
//           mixBlendMode: "multiply",
//           display: isMoving ? "block" : "none",
//         }}
//       />
//     </div>
//   );
// };

// export default CursorFollower;
