import React, { useState, useEffect, useRef } from 'react'
import Pixel from './Pixel'

function App() {
  // ... (rest of the code)

  // Set up the timer using `useEffect` to change colors of all pixels every 2 seconds.
  useEffect(() => {
    const intervalId = setInterval(
      () => updatePixelStyle(Math.floor(Math.random() * 2850)),
      2000
    )

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, []) // Properly provide an empty dependency array

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
