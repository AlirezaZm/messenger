import React from 'react'
import { SafeAreaView  } from 'react-native'

import RootNavigator from './src/navigations'
import store from './src/redux/store'
import {Provider} from 'react-redux'




const App = () => {

  return (
    <Provider store={store}>
          <RootNavigator />
    </Provider>
  )
}

export default App