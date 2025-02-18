import { RootStack } from '@routing/root-stack-navigator'
import { Providers } from './providers'

export const App = () => {
  return (
    <Providers>
      <RootStack />
    </Providers>
  )
}
