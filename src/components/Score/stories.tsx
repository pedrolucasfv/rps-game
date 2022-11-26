import { Story, Meta } from '@storybook/react'
import Score from '.'

export default {
  title: 'Score',
  component: Score,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => <Score />
