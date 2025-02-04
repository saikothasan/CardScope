"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWave = (yOffset: number, amplitude: number, frequency: number, speed: number, color: string) => {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x <= canvas.width; x++) {
        const y = yOffset + Math.sin((x * frequency + Date.now() * speed) / 1000) * amplitude
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.fillStyle = color
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // More colorful waves
      drawWave(canvas.height * 0.8, 30, 0.02, 0.5, "rgba(59, 130, 246, 0.2)") // Blue
      drawWave(canvas.height * 0.85, 40, 0.03, 0.7, "rgba(99, 102, 241, 0.2)") // Indigo
      drawWave(canvas.height * 0.9, 50, 0.01, 0.3, "rgba(139, 92, 246, 0.2)") // Purple
      drawWave(canvas.height * 0.95, 60, 0.02, 0.4, "rgba(236, 72, 153, 0.2)") // Pink
      drawWave(canvas.height, 70, 0.03, 0.6, "rgba(248, 113, 113, 0.2)") // Red

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
}

