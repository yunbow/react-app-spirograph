import React from 'react';
import { Button } from '../../atoms';
import styles from './ControlButtons.module.css';

interface ControlButtonsProps {
  isAnimating: boolean;
  onClear: () => void;
  onToggleAnimation: () => void;
  onStep: () => void;
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  isAnimating,
  onClear,
  onToggleAnimation,
  onStep
}) => {
  return (
    <div className={styles.container}>
      <Button onClick={onClear}>
        クリア
      </Button>
      <Button onClick={onToggleAnimation}>
        {isAnimating ? '一時停止' : 'アニメーション実行'}
      </Button>
      <Button onClick={onStep} disabled={isAnimating}>
        ステップ実行
      </Button>
    </div>
  );
};