import { NextPage } from 'next'
import React from 'react'

interface Props {
  deviceType?: string
}

const Footer: NextPage<Props> = ({ deviceType }) => {
  let componentToRender
  if (deviceType === 'mobile') {
    componentToRender = (
      <div className="MobileComponent">
        <h1>Mobile</h1>
      </div>
    )
  } else {
    componentToRender = (
      <div className="DesktopComponent">
        <h1>Desktop</h1>
      </div>
    )
  }

  return componentToRender
}

export default Footer
