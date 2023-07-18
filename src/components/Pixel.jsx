import React from 'react'

const Pixel = () => {
  const [style, setStyle] = React.useState({
    height: '44px',
    width: '44px',
    backgroundColor: 'cornflowerblue',
  })

  const handleHover = () => {
    setStyle({
      height: '44px',
      width: '44px',
      backgroundColor: 'red',
    })
  }

  return <div className="pixel" style={style} onMouseEnter={handleHover}></div>
}

export default Pixel
