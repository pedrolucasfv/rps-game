import { Story, Meta } from '@storybook/react'
import Svgrps, { SvgrpsProps } from '.'

export default {
  title: 'Svgrps',
  component: Svgrps,
  args: {
    type: 'paper',
    size: 'small'
  }
} as Meta

export const Default: Story<SvgrpsProps> = (args) => <Svgrps {...args} />
