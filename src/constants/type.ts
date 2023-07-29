import type { StackNavigationProp } from '@react-navigation/stack'
import type { CompositeNavigationProp } from '@react-navigation/native'

export type ScreenNavigationProp = StackNavigationProp<CompositeNavigationProp<any, any>>