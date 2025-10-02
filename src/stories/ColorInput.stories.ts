import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorInput } from '../components/atoms/ColorInput';

const meta: Meta<typeof ColorInput> = {
  title: 'Atoms/ColorInput',
  component: ColorInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: action('changed') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LineColor: Story = {
  args: {
    label: '線の色',
    value: '#FF5722',
  },
};

export const BackgroundColor: Story = {
  args: {
    label: '背景色',
    value: '#FFFFFF',
  },
};