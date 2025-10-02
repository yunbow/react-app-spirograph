import React, { useRef, useEffect, useCallback } from 'react';
import { Canvas, CanvasRef } from '../../atoms';
import { ParameterControls, StyleControls, ControlButtons } from '../../molecules';
import { useSpirograph } from '../../../hooks/useSpirograph';
import { SpirographPoint } from '../../../types';
import styles from './SpirographApp.module.css';

export const SpirographApp: React.FC = () => {
  const canvasRef = useRef<CanvasRef>(null);

  const drawSpirograph = useCallback((points: SpirographPoint[]) => {
    const ctx = canvasRef.current?.getContext();
    if (!ctx || points.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.stroke();
  }, []);

  const {
    parameters,
    style,
    state,
    updateParameter,
    updateStyle,
    toggleAnimation,
    step,
    clear,
  } = useSpirograph({
    onRedraw: drawSpirograph,
  });

  const handleClear = useCallback(() => {
    clear();
    canvasRef.current?.clear(style.bgColor);
  }, [clear, style.bgColor]);

  const handleParameterChange = useCallback((key: keyof typeof parameters, value: number) => {
    updateParameter(key, value);
    canvasRef.current?.clear(style.bgColor);
  }, [updateParameter, style.bgColor]);

  const handleStyleChange = useCallback((key: keyof typeof style, value: string | number) => {
    updateStyle(key, value);
    if (key === 'bgColor') {
      canvasRef.current?.clear(value as string);
      drawSpirograph(state.points);
    }
  }, [updateStyle, drawSpirograph, state.points]);

  const handleStep = useCallback(() => {
    if (!state.isAnimating) {
      step();
    }
  }, [step, state.isAnimating]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext();
    if (!ctx) return;

    canvasRef.current?.clear(style.bgColor);

    if (state.points.length > 1) {
      ctx.strokeStyle = style.lineColor;
      ctx.lineWidth = style.lineWidth;
      drawSpirograph(state.points);
    }
  }, [state.points, style, drawSpirograph]);

  useEffect(() => {
    canvasRef.current?.clear(style.bgColor);
  }, [style.bgColor]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>スピログラフ アニメーション</h1>

      <Canvas ref={canvasRef} />

      <div className={styles.controls}>
        <ParameterControls
          parameters={parameters}
          onParameterChange={handleParameterChange}
        />

        <StyleControls
          style={style}
          onStyleChange={handleStyleChange}
        />

        <ControlButtons
          isAnimating={state.isAnimating}
          onClear={handleClear}
          onToggleAnimation={toggleAnimation}
          onStep={handleStep}
        />
      </div>
    </div>
  );
};