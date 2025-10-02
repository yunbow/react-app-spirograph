import React from 'react';
import { ColorInput, RangeInput } from '../../atoms';
import { SpirographStyle } from '../../../types';
import { SPIROGRAPH_CONFIG } from '../../../Config';
import styles from './StyleControls.module.css';

interface StyleControlsProps {
  style: SpirographStyle;
  onStyleChange: (key: keyof SpirographStyle, value: string | number) => void;
}

export const StyleControls: React.FC<StyleControlsProps> = ({
  style,
  onStyleChange
}) => {
  return (
    <div className={styles.container}>
      <ColorInput
        label="線の色"
        value={style.lineColor}
        onChange={(value) => onStyleChange('lineColor', value)}
      />
      <ColorInput
        label="背景色"
        value={style.bgColor}
        onChange={(value) => onStyleChange('bgColor', value)}
      />
      <RangeInput
        label="線の太さ"
        value={style.lineWidth}
        min={SPIROGRAPH_CONFIG.LIMITS.LINE_WIDTH.MIN}
        max={SPIROGRAPH_CONFIG.LIMITS.LINE_WIDTH.MAX}
        onChange={(value) => onStyleChange('lineWidth', value)}
        unit="px"
      />
    </div>
  );
};