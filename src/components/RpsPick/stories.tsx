import { Story, Meta } from '@storybook/react'
import RpsPick, { RpsPickProps } from '.'

export default {
  title: 'RpsPick',
  component: RpsPick,
  args: {
    game: 'rps'
  }
} as Meta

export const Default: Story<RpsPickProps> = (args) => <RpsPick {...args} />
