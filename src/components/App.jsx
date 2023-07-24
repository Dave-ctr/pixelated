import React, { useState, useEffect, useRef } from 'react'
import Pixel from './Pixel'

function App() {
  // Generate an array of random colors
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  // Create an array of state objects for each Pixel using `useState` hook.
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

  // Use a ref to keep track of whether the right mouse button is being held down
  const rightMouseDownRef = useRef(false)

  // Event listener for when the right mouse button is pressed down
  const handleMouseDown = (evt) => {
    if (evt.button === 2) {
      rightMouseDownRef.current = true
    }
  }

  // Event listener for when the right mouse button is released
  const handleMouseUp = (evt) => {
    if (evt.button === 2) {
      rightMouseDownRef.current = false
    }
  }

  // Set up the event listeners using useEffect
  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Clean up the event listeners on unmount
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Set up the timer using `useEffect` to change colors of all pixels every 2 seconds.
  useEffect(() => {
    const intervalId = setInterval(
      () => updatePixelStyle(Math.floor(Math.random() * 2850)),
      2000
    ) // Change color every 2 seconds

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
