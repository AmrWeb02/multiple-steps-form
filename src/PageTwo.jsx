import React from 'react'
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

const PageTwo = ({formData, errors, changeHandler}) => {
  return (
    <>
    <h1 className='step-number'>Desired Job</h1>
    <div className="radiolist">
        <div className="row">
            <input type="radio" name="job" value="React Developer" id="react" onChange={(e)=>{changeHandler(e)}} checked={formData.job==="React Developer"}/><label htmlFor="react">React Developer <IconContext.Provider value={{size:"30px"}}><FaReact/></IconContext.Provider></label>
        </div>
        <div className="row">
            <input type="radio" name="job" value="Angular Developer" id="angular" onChange={(e)=>{changeHandler(e)}} checked={formData.job==="Angular Developer"} /><label htmlFor="angular">Angular Developer <IconContext.Provider value={{size:"30px"}}><FaAngular /></IconContext.Provider></label>
        </div>
        <div className="row">
            <input type="radio" name="job" value="UI/UX Designer" id="vue" onChange={(e)=>{changeHandler(e)}} checked={formData.job==="UI/UX Designer"}/><label htmlFor="vue">UI/UX Designer <IconContext.Provider value={{size:"30px"}}> <FaPaintBrush /> </IconContext.Provider></label>
        </div>
    </div>
    <p className='error-p'>{errors.job}</p>  
    </>
)
}

export default PageTwo