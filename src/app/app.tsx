import { StyleSheet } from 'react-native'

import { RootStack } from '@routing/root-stack-navigator'
import { Providers } from './providers'

export const App = () => {
  return (
    <Providers>
      <RootStack />
    </Providers>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
