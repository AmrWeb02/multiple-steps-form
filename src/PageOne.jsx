import React from 'react'
// Images
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const PageOne = ( {formData, errors, focusState, focusHandler, blurHandler, changeHandler}) => {
  return (
    <>
    <h1 className='step-number'>Contact Details</h1>
    <div className="input-group">
        <input required type="text" id="firstname" name='firstname' value={formData.firstname} onFocus={(e)=>{focusHandler("firstname",e)}} onBlur={(e)=>{blurHandler("firstname", e)}} onChange={(e)=>{changeHandler(e)}}/>
        <label htmlFor="firstname" className={`input-label ${ focusState.firstname ? "moveLabel":""}`}><FaUser />First Name</label>
        <p className='error-p'>{errors.firstname}</p>
    </div>
    <div className="input-group">
        <input required type="text" id="lastname" name='lastname' value={formData.lastname} onFocus={(e)=>{focusHandler("lastname",e)}} onBlur={(e)=>{blurHandler("lastname", e)}} onChange={(e)=>{changeHandler(e)}}/>
        <label htmlFor="lastname" className={focusState.lastname ? "input-label moveLabel":"input-label"}><FaUser />Last Name</label>
        <p className='error-p'>{errors.lastname}</p>
    </div>
    <div className="input-group">
        <input required type="email" id="email" name='email' value={formData.email} onFocus={(e)=>{focusHandler("email",e)}} onBlur={(e)=>{blurHandler("email", e)}} onChange={(e)=>{changeHandler(e)}}/>
        <label htmlFor="email" className={`input-label ${focusState.email ? "moveLabel":""}`} ><MdEmail />Email</label>
        <p className='error-p'>{errors.email}</p>
    </div>
    <div className="input-group">
        <input required type="number" id="phone" name='phone' value={formData.phone} onFocus={(e)=>{focusHandler("phone",e)}} onBlur={(e)=>{blurHandler("phone", e)}} onChange={(e)=>{changeHandler(e)}}/>
        <label htmlFor="phone" className={focusState.phone ? "input-label moveLabel":"input-label"} ><FaPhone />Phone Number</label>
        <p className='error-p'>{errors.phone}</p>
    </div>
    </>
  )
}

export default PageOne