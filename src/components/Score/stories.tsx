import { Story, Meta } from '@storybook/react'
import Score, { ScoreProps } from '.'

export default {
  title: 'Score',
  component: Score,
  args: {
    score: 12
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ScoreProps> = (args) => <Score {...args} />
