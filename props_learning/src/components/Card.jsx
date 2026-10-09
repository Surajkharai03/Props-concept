import React from 'react'

const Card = (props) => {
  return (
    <div>
        {props.children}
        {props.text}
    </div>
  )
}

export default Card