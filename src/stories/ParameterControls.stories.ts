import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ParameterControls } from '../components/molecules/ParameterControls';
import { SPIROGRAPH_CONFIG } from '../Config';

const meta: Meta<typeof ParameterControls> = {
  title: 'Molecules/ParameterControls',
  component: ParameterControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onParameterChange: action('parameter-change') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    parameters: {
      outerCircle: SPIROGRAPH_CONFIG.DEFAULTS.OUTER_CIRCLE,
      innerCircle: SPIROGRAPH_CONFIG.DEFAULTS.INNER_CIRCLE,
      penOffset: SPIROGRAPH_CONFIG.DEFAULTS.PEN_OFFSET,
      speed: SPIROGRAPH_CONFIG.DEFAULTS.SPEED,
    },
  },
};