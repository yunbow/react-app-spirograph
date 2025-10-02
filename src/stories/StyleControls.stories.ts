import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StyleControls } from '../components/molecules/StyleControls';
import { SPIROGRAPH_CONFIG } from '../Config';

const meta: Meta<typeof StyleControls> = {
  title: 'Molecules/StyleControls',
  component: StyleControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onStyleChange: action('style-change') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: {
      lineColor: SPIROGRAPH_CONFIG.DEFAULTS.LINE_COLOR,
      bgColor: SPIROGRAPH_CONFIG.DEFAULTS.BG_COLOR,
      lineWidth: SPIROGRAPH_CONFIG.DEFAULTS.LINE_WIDTH,
    },
  },
};