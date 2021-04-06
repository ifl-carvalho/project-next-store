import { useContext } from 'react'
import { DeviceContext, DeviceInformation } from '../contexts/DeviceContext'

export function useDeviceInformation(): DeviceInformation {
  const context = useContext(DeviceContext).deviceInformation

  return context
}

export function useSetDeviceInformation(): (deviceInformation: DeviceInformation) => void {
  const context = useContext(DeviceContext).setDeviceInformation

  return context
}
