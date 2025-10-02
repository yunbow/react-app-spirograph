export const SPIROGRAPH_CONFIG = {
  CANVAS: {
    WIDTH: 600,
    HEIGHT: 600,
  },
  DEFAULTS: {
    OUTER_CIRCLE: 200,
    INNER_CIRCLE: 80,
    PEN_OFFSET: 60,
    SPEED: 3,
    LINE_COLOR: '#FF5722',
    BG_COLOR: '#FFFFFF',
    LINE_WIDTH: 2,
  },
  LIMITS: {
    OUTER_CIRCLE: { MIN: 100, MAX: 250 },
    INNER_CIRCLE: { MIN: 10, MAX: 150 },
    PEN_OFFSET: { MIN: 10, MAX: 150 },
    SPEED: { MIN: 1, MAX: 10 },
    LINE_WIDTH: { MIN: 1, MAX: 5 },
  },
  ANIMATION: {
    ANGLE_STEP: 0.02,
    ANGLE_OFFSET: 0.1,
  },
} as const;