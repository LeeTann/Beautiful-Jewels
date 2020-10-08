import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<i style={{ color }} key={i} className='fas fa-star'></i>)
    } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
      stars.push(
        <i style={{ color }} key={i} className='fas fa-star-half-alt'></i>
      )
    } else {
      stars.push(<i style={{ color }} key={i} className='far fa-star'></i>)
    }
  }

  return (
    <>
      {stars}
      <span> {text && text}</span>
    </>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
