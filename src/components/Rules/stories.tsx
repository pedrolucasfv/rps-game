import { Story, Meta } from '@storybook/react'
import Rules, { RulesProps } from '.'

export default {
  title: 'Rules',
  component: Rules,
  args: {
    fullScreen: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<RulesProps> = (args) => <Rules {...args} />
