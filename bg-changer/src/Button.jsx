import React from 'react'

function Button({btnColor, setColor}) {
    const handleClick = () => {
        setColor(btnColor)
    }
  return (
    <button
        onClick={handleClick}
        className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
        style={{ backgroundColor: btnColor }}
      >
        {btnColor}
      </button>
  )
}

export default Button