import React from 'react'

function Header({minimize = false}) {
  console.log(`Header ${minimize}`)
  const minimizeClassName = minimize ? 'minimize' : '';

  return (
    <div className={`header ${minimizeClassName}`}>
        Header
    </div>
  )
}

export default Header
