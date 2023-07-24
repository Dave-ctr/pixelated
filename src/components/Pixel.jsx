import React, { useRef } from 'react'

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

  const handleContextMenu = (evt) => {
    evt.preventDefault()
    evt.target.style.backgroundColor = 'black'
  }

  // Use a ref to keep track of whether the right mouse button is being held down
  const rightMouseDownRef = useRef(false)

  const handleMouseDown = (evt) => {
    if (evt.button === 2) {
      rightMouseDownRef.current = true
      evt.target.style.backgroundColor = 'black'
    }
  }

  const handleMouseUp = (evt) => {
    if (evt.button === 2) {
      rightMouseDownRef.current = false
    }
  }

  const handleDoubleClick = (evt) => {
    evt.target.style.backgroundColor = 'white'
  }

  const handleDragEnter = (evt) => {
    if (rightMouseDownRef.current) {
      evt.target.style.backgroundColor = 'black'
    } else {
      evt.target.style.backgroundColor = 'yellow'
    }
  }

  return (
    <div
      className="pixel"
      style={style}
      onMouseEnter={handleHover}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onDoubleClick={handleDoubleClick}
      onDragEnter={handleDragEnter}
      draggable
    ></div>
  )
}

export default Pixel
