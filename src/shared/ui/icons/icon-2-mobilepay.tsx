import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const Icon2MobilePay = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.659 10.75H3.25C2.83579 10.75 2.5 10.4142 2.5 10C2.5 9.58579 2.83579 9.25 3.25 9.25H10.659L8.93934 7.53033C8.64645 7.23744 8.64645 6.76256 8.93934 6.46967C9.23223 6.17678 9.70711 6.17678 10 6.46967L13 9.46967C13.2929 9.76256 13.2929 10.2374 13 10.5303L10 13.5303C9.70711 13.8232 9.23223 13.8232 8.93934 13.5303C8.64645 13.2374 8.64645 12.7626 8.93934 12.4697L10.659 10.75ZM6.95 6C6.95 6.41421 6.61421 6.75 6.2 6.75C5.78579 6.75 5.45 6.41421 5.45 6V4C5.45 2.48122 6.68122 1.25 8.2 1.25H17.2C18.7188 1.25 19.95 2.48122 19.95 4V20C19.95 21.5188 18.7188 22.75 17.2 22.75H8.2C6.68122 22.75 5.45 21.5188 5.45 20V14C5.45 13.5858 5.78579 13.25 6.2 13.25C6.61421 13.25 6.95 13.5858 6.95 14V20C6.95 20.6904 7.50964 21.25 8.2 21.25H17.2C17.8904 21.25 18.45 20.6904 18.45 20V4C18.45 3.30964 17.8904 2.75 17.2 2.75H8.2C7.50964 2.75 6.95 3.30964 6.95 4V6ZM12.5 19.5C11.9477 19.5 11.5 19.0523 11.5 18.5C11.5 17.9477 11.9477 17.5 12.5 17.5C13.0523 17.5 13.5 17.9477 13.5 18.5C13.5 19.0523 13.0523 19.5 12.5 19.5Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}
