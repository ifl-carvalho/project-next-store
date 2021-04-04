import { useContext } from 'react'
import { DeviceContext, DeviceContextData } from '../contexts/DeviceContext'

export function useDeviceInformation(): DeviceContextData {
  const context = useContext(DeviceContext)

  return context
}
