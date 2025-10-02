import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RangeInput } from '../components/atoms/RangeInput';

const meta: Meta<typeof RangeInput> = {
  title: 'Atoms/RangeInput',
  component: RangeInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: action('changed') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'サンプル値',
    value: 50,
    min: 0,
    max: 100,
  },
};

export const WithUnit: Story = {
  args: {
    label: '線の太さ',
    value: 2,
    min: 1,
    max: 5,
    unit: 'px',
  },
};