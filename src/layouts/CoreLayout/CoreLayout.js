import React from 'react'
import './CoreLayout.scss'
import MenuLayout from '../MenuLayout/'

export const CoreLayout = ({ children }) => {

  return (
    <div className="CoreLayout">
      <MenuLayout children={children} />
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
