import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@screens/home'

const RootStackNavigator = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
})

export const RootStack = createStaticNavigation(RootStackNavigator)
