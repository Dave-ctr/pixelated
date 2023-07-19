import React, { useState } from 'react'

const Pixel = () => {
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
    return randomColor
  }

  const [style, setStyle] = useState(() => {
    const randomColor = generateRandomColor()
    return {
      height: '44px',
      width: '44px',
      backgroundColor: randomColor,
    }
  })

  const handleHover = () => {
    const randomColor = generateRandomColor()
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: randomColor,
    }))
  }

  return <div className="pixel" style={style} onMouseEnter={handleHover}></div>
}

export default Pixel
