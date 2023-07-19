import React from 'react'

const Pixel = ({ style, updateStyle }) => {
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  const handleHover = () => {
    const randomColor = generateRandomColor()
    updateStyle(randomColor)
  }

  const handleClick = () => {
    const randomColor = generateRandomColor()
    updateStyle(randomColor)
  }

  return (
    <div
      className="pixel"
      style={style}
      onMouseEnter={handleHover}
      onClick={handleClick}
    ></div>
  )
}

export default Pixel
