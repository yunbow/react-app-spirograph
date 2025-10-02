export interface SpirographParameters {
  outerCircle: number;
  innerCircle: number;
  penOffset: number;
  speed: number;
}

export interface SpirographStyle {
  lineColor: string;
  bgColor: string;
  lineWidth: number;
}

export interface SpirographPoint {
  x: number;
  y: number;
}

export interface SpirographState {
  isAnimating: boolean;
  angle: number;
  points: SpirographPoint[];
}