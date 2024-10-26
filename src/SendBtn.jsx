import React from 'react'

const SendBtn = (props) => {
  return (
    <input type="submit" value="Submit" onClick={props.onClick} />
  )
}

export default SendBtn