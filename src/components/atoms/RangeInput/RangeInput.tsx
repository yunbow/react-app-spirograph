import React from 'react';
import styles from './RangeInput.module.css';

interface RangeInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  unit?: string;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  label,
  value,
  min,
  max,
  onChange,
  unit = ''
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}: <span className={styles.valueDisplay}>{value}{unit}</span>
      </label>
      <input
        type="range"
        className={styles.input}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};