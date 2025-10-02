import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ControlButtons } from '../components/molecules/ControlButtons';

const meta: Meta<typeof ControlButtons> = {
  title: 'Molecules/ControlButtons',
  component: ControlButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClear: action('clear'),
    onToggleAnimation: action('toggle-animation'),
    onStep: action('step'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NotAnimating: Story = {
  args: {
    isAnimating: false,
  },
};

export const Animating: Story = {
  args: {
    isAnimating: true,
  },
};