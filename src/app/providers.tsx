import { ThemeProvider } from '@shared/ui/theme'

export type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
