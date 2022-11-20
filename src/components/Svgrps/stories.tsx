import { Story, Meta } from '@storybook/react'
import Svgrps, { SvgrpsProps } from '.'

export default {
  title: 'Svgrps',
  component: Svgrps,
  args: {
    type: 'paper',
    noColor: false
  }
} as Meta

export const Default: Story<SvgrpsProps> = (args) => <Svgrps {...args} />
