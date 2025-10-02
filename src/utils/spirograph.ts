import { SpirographPoint } from '../types';
import { SPIROGRAPH_CONFIG } from '../Config';

export const calculateSpirographPoint = (
  angle: number,
  R: number,
  r: number,
  d: number,
  centerX: number,
  centerY: number
): SpirographPoint => {
  const k = r / R;
  const l = d / r;

  const x = R * ((1 - k) * Math.cos(angle) + l * k * Math.cos((1 - k) / k * angle));
  const y = R * ((1 - k) * Math.sin(angle) - l * k * Math.sin((1 - k) / k * angle));

  return { x: centerX + x, y: centerY + y };
};

export const calculateMaxAngle = (R: number, r: number): number => {
  const gcd = (a: number, b: number): number => {
    return b ? gcd(b, a % b) : a;
  };
  const lcm = (R * r) / gcd(R, r);
  return (2 * Math.PI * lcm) / r + SPIROGRAPH_CONFIG.ANIMATION.ANGLE_OFFSET;
};