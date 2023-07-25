import React, { useState, useEffect } from 'react'
import Pixel from './Pixel'

function App() {
  // Generate an array of random colors
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  // Create an array of state objects for each Pixel
  const [pixels, setPixels] = useState(() => {
    const initialColors = Array.from({ length: 2850 }, () =>
      generateRandomColor()
    )
    return initialColors.map((color) => ({
      height: '21px',
      width: '21px',
      backgroundColor: color,
    }))
  })

  // Update a single Pixel's style based on its index
  const updatePixelStyle = (index) => {
    setPixels((prevPixels) => {
      const randomColor = generateRandomColor()
      const newPixels = [...prevPixels]
      newPixels[index] = {
        ...newPixels[index],
        backgroundColor: randomColor,
      }
      return newPixels
    })
  }

  // Function to update all pixels' styles with random colors
  const updateAllPixelStyles = () => {
    setPixels((prevPixels) => {
      const updatedPixels = prevPixels.map(() => ({
        height: '21px',
        width: '21px',
        backgroundColor: generateRandomColor(),
      }))
      return updatedPixels
    })
  }

  // Set up the timer using useEffect
  useEffect(() => {
    const intervalId = setInterval(updateAllPixelStyles, 2000) // Change color every 2 seconds

    // Clean up the interval on unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      {/* Map over the pixels array to render each Pixel */}
      {pixels.map((style, index) => (
        <Pixel
          key={index}
          style={style}
          updateStyle={() => updatePixelStyle(index)}
        />
      ))}
    </>
  )
}

export default App
