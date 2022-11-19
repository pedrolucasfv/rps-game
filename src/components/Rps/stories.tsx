import { Story, Meta } from '@storybook/react'
import Rps from '.'

export default {
  title: 'Rps',
  component: Rps
} as Meta

export const Default: Story = () => <Rps />
