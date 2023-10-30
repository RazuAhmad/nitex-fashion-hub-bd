import React from 'react'

const CustomButton = ({children, href,className="no-underline"}) => {
  return (
    <a className={className} href={href}>{children}</a>
  )
}

export default CustomButton