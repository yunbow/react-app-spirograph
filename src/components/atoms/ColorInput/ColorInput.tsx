import React from 'react';
import styles from './ColorInput.module.css';

interface ColorInputProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

export const ColorInput: React.FC<ColorInputProps> = ({
  label,
  value,
  onChange
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={label}>
        {label}:
      </label>
      <input
        id={label}
        type="color"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};