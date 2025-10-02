import React from 'react';
import { RangeInput } from '../../atoms';
import { SpirographParameters } from '../../../types';
import { SPIROGRAPH_CONFIG } from '../../../Config';
import styles from './ParameterControls.module.css';

interface ParameterControlsProps {
  parameters: SpirographParameters;
  onParameterChange: (key: keyof SpirographParameters, value: number) => void;
}

export const ParameterControls: React.FC<ParameterControlsProps> = ({
  parameters,
  onParameterChange
}) => {
  return (
    <div className={styles.container}>
      <RangeInput
        label="外側の円の半径 (R)"
        value={parameters.outerCircle}
        min={SPIROGRAPH_CONFIG.LIMITS.OUTER_CIRCLE.MIN}
        max={SPIROGRAPH_CONFIG.LIMITS.OUTER_CIRCLE.MAX}
        onChange={(value) => onParameterChange('outerCircle', value)}
      />
      <RangeInput
        label="内側の円の半径 (r)"
        value={parameters.innerCircle}
        min={SPIROGRAPH_CONFIG.LIMITS.INNER_CIRCLE.MIN}
        max={SPIROGRAPH_CONFIG.LIMITS.INNER_CIRCLE.MAX}
        onChange={(value) => onParameterChange('innerCircle', value)}
      />
      <RangeInput
        label="ペンのオフセット (d)"
        value={parameters.penOffset}
        min={SPIROGRAPH_CONFIG.LIMITS.PEN_OFFSET.MIN}
        max={SPIROGRAPH_CONFIG.LIMITS.PEN_OFFSET.MAX}
        onChange={(value) => onParameterChange('penOffset', value)}
      />
      <RangeInput
        label="アニメーション速度"
        value={parameters.speed}
        min={SPIROGRAPH_CONFIG.LIMITS.SPEED.MIN}
        max={SPIROGRAPH_CONFIG.LIMITS.SPEED.MAX}
        onChange={(value) => onParameterChange('speed', value)}
      />
    </div>
  );
};