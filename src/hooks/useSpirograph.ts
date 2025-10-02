import { useState, useCallback, useRef } from 'react';
import { SpirographParameters, SpirographStyle, SpirographState, SpirographPoint } from '../types';
import { SPIROGRAPH_CONFIG } from '../Config';
import { calculateSpirographPoint, calculateMaxAngle } from '../utils/spirograph';

interface UseSpirographProps {
  onRedraw?: (points: SpirographPoint[]) => void;
}

export const useSpirograph = ({ onRedraw }: UseSpirographProps = {}) => {
  const [parameters, setParameters] = useState<SpirographParameters>({
    outerCircle: SPIROGRAPH_CONFIG.DEFAULTS.OUTER_CIRCLE,
    innerCircle: SPIROGRAPH_CONFIG.DEFAULTS.INNER_CIRCLE,
    penOffset: SPIROGRAPH_CONFIG.DEFAULTS.PEN_OFFSET,
    speed: SPIROGRAPH_CONFIG.DEFAULTS.SPEED,
  });

  const [style, setStyle] = useState<SpirographStyle>({
    lineColor: SPIROGRAPH_CONFIG.DEFAULTS.LINE_COLOR,
    bgColor: SPIROGRAPH_CONFIG.DEFAULTS.BG_COLOR,
    lineWidth: SPIROGRAPH_CONFIG.DEFAULTS.LINE_WIDTH,
  });

  const [state, setState] = useState<SpirographState>({
    isAnimating: false,
    angle: 0,
    points: [],
  });

  const animationIdRef = useRef<number | null>(null);

  const updateParameter = useCallback((key: keyof SpirographParameters, value: number) => {
    setParameters(prev => ({ ...prev, [key]: value }));
    resetAnimation();
  }, []);

  const updateStyle = useCallback((key: keyof SpirographStyle, value: string | number) => {
    setStyle(prev => ({ ...prev, [key]: value }));
    if (key === 'lineWidth' || key === 'lineColor') {
      onRedraw?.(state.points);
    }
  }, [state.points, onRedraw]);

  const resetAnimation = useCallback(() => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }
    setState({
      isAnimating: false,
      angle: 0,
      points: [],
    });
  }, []);

  const step = useCallback(() => {
    const centerX = SPIROGRAPH_CONFIG.CANVAS.WIDTH / 2;
    const centerY = SPIROGRAPH_CONFIG.CANVAS.HEIGHT / 2;

    setState(prevState => {
      const newPoint = calculateSpirographPoint(
        prevState.angle,
        parameters.outerCircle,
        parameters.innerCircle,
        parameters.penOffset,
        centerX,
        centerY
      );

      const newPoints = [...prevState.points, newPoint];
      const newAngle = prevState.angle + SPIROGRAPH_CONFIG.ANIMATION.ANGLE_STEP * parameters.speed;
      const maxAngle = calculateMaxAngle(parameters.outerCircle, parameters.innerCircle);

      const isComplete = newAngle >= maxAngle;

      if (isComplete) {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
        return {
          ...prevState,
          points: newPoints,
          isAnimating: false,
        };
      }

      return {
        ...prevState,
        points: newPoints,
        angle: newAngle,
      };
    });

    return true;
  }, [parameters]);

  const animate = useCallback(() => {
    if (!step()) return;
    animationIdRef.current = requestAnimationFrame(animate);
  }, [step]);

  const toggleAnimation = useCallback(() => {
    setState(prevState => {
      const newIsAnimating = !prevState.isAnimating;

      if (newIsAnimating) {
        animate();
      } else if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }

      return {
        ...prevState,
        isAnimating: newIsAnimating,
      };
    });
  }, [animate]);

  const clear = useCallback(() => {
    resetAnimation();
  }, [resetAnimation]);

  return {
    parameters,
    style,
    state,
    updateParameter,
    updateStyle,
    toggleAnimation,
    step,
    clear,
  };
};