import type { Meta, StoryObj } from '@storybook/react';
import { SpirographApp } from '../components/organisms/SpirographApp';

const meta: Meta<typeof SpirographApp> = {
  title: 'Organisms/SpirographApp',
  component: SpirographApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};