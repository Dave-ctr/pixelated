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

  const handleDoubleClick = (evt) => {
    evt.target.style.backgroundColor = 'white'
  }

  const handleDragEnter = (evt) => {
    evt.target.style.backgroundColor = 'yellow'
  }

  return (
    <div
      className="pixel"
      style={style}
      onMouseEnter={handleHover}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onDragEnter={handleDragEnter}
      draggable
    ></div>
  )
}

export default Pixel
