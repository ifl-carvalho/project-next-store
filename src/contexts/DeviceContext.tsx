import { NextPage } from 'next'
import { useState, createContext, ReactNode } from 'react'

export interface DeviceInformation {
  isMobile: boolean
  deviceType: string
}

export interface DeviceProviderProps {
  children: ReactNode
  deviceType: string
}

export interface DeviceContextData {
  deviceInformation: DeviceInformation
  setDeviceInformation: (deviceInformation: DeviceInformation) => void
}

export const DeviceContext = createContext({} as DeviceContextData)

export const ProductsProvider: NextPage<DeviceProviderProps> = function ({ children, deviceType }) {
  const isMobile = Boolean(
    deviceType.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  )

  const setDeviceInformation = (deviceInformation: DeviceInformation): void => {
    console.log(
      setDeviceInformationState({ ...deviceInformationState, deviceInformation: deviceInformation })
    )
  }

  const [deviceInformationState, setDeviceInformationState] = useState({
    deviceInformation: { isMobile: isMobile, deviceType: deviceType },
    setDeviceInformation: setDeviceInformation,
  })

  return <DeviceContext.Provider value={deviceInformationState}>{children}</DeviceContext.Provider>
}
