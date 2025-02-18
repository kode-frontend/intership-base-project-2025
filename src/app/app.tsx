import { useState } from 'react'
import { Button, SafeAreaView } from 'react-native'

import { RootStack } from '@routing/root-stack-navigator'

import { Providers } from './providers'
import { Storybook } from '../../.storybook'

export const App = () => {
  const [isStorybookVisible, setIsStorybookVisible] = useState(true)

  if (isStorybookVisible) {
    return (
      <Providers>
        <Storybook />
        <SafeAreaView>
          <Button
            onPress={() => setIsStorybookVisible(false)}
            title='Перейти к приложению'
          />
        </SafeAreaView>
      </Providers>
    )
  }

  return (
    <Providers>
      <RootStack />
    </Providers>
  )
}
