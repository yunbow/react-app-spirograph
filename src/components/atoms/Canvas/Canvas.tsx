import { useRef, useImperativeHandle, forwardRef } from 'react';
import styles from './Canvas.module.css';
import { SPIROGRAPH_CONFIG } from '../../../Config';

export interface CanvasRef {
  getContext: () => CanvasRenderingContext2D | null;
  clear: (bgColor?: string) => void;
}

interface CanvasProps {
  width?: number;
  height?: number;
}

export const Canvas = forwardRef<CanvasRef, CanvasProps>(({
  width = SPIROGRAPH_CONFIG.CANVAS.WIDTH,
  height = SPIROGRAPH_CONFIG.CANVAS.HEIGHT
}, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(ref, () => ({
    getContext: () => {
      return canvasRef.current?.getContext('2d') || null;
    },
    clear: (bgColor = SPIROGRAPH_CONFIG.DEFAULTS.BG_COLOR) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }));

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={width}
        height={height}
      />
    </div>
  );
});