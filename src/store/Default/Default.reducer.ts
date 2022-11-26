import { actions } from './Default.actions'

type Action = {
  type: keyof typeof actions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}
export default function (state = 0, action: Action) {
  switch (action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1]
    case 'SUBTRACT':
      return action.payload[0] - action.payload[1]
    default:
      return state
  }
}
