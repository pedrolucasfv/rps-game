import { Story, Meta } from '@storybook/react'
import Result, { ResultProps } from '.'

export default {
  title: 'Result',
  component: Result,
  args: {
    isWin: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ResultProps> = (args) => <Result {...args} />
