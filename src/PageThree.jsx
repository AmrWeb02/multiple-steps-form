import React from 'react'

const PageThree = ({formData, changeHandler}) => {

  return (
    <>
    <h1 className='step-number'>Expected Annual Salary</h1>
    <h3>{`$${formData.salary}`}</h3>
    <input type="range" min="60000" max="200000" className="slider" name="salary" onChange={(e)=>{changeHandler(e)}}/>
    </>
  )
}

export default PageThree