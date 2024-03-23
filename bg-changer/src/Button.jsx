import React from 'react'

function Button({btnColor, onClick}) {
  return (
    <button
        onClick={() => onClick(btnColor)}
        className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
        style={{ backgroundColor: btnColor }}
      >
        {btnColor}
      </button>
  )
}

export default Button