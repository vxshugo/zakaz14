import React from 'react'

const Button = ({ label, handleClick }) => {
  return (
    <button onClick={handleClick} style={{width: "100%", height: 45,}}>
      {label}
    </button>
  )
}

export default Button