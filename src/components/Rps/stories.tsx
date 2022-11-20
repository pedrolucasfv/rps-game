import { Story, Meta } from '@storybook/react'
import Rps, { RpsProps } from '.'

export default {
  title: 'Rps',
  component: Rps,
  args: {
    type: 'paper'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<RpsProps> = (args) => <Rps {...args} />
