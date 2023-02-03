import React from 'react'

const CurrentYear = () => {
    let date = new Date();
    const year = date.getFullYear();
  return (
    <p>&copy; copyright <span id="date">{year}</span></p>
  )
}

export default CurrentYear