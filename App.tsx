import RootNavigator from './src/navigation/RootNavigator'
import Home from './src/screens/Home'
import { Provider } from 'react-redux'
import { store } from './src/app/store'

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}