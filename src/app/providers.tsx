import { ThemeProvider } from '@shared/ui/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SafeAreaProvider>
  )
}
