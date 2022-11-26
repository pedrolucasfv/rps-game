import Page from 'templates/Page'
import store from 'store/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  )
}
