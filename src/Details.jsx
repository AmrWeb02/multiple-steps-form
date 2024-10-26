import React from 'react'

const Details = ({formData}) => {
  return (
    <div className="details-container">
        <h1>{formData.firstname +" " + formData.lastname+","} your submission is <span className='yellow'>under review</span></h1>
        <p className="details"><strong>First Name: </strong>{formData.firstname}</p>
        <p className="details"><strong>Last Name: </strong>{formData.lastname}</p>
        <p className="details"><strong>Email: </strong> {formData.email}</p>
        <p className="details"><strong>Phone: </strong>{formData.phone}</p>
        <p className="details"><strong>Job: </strong>{formData.job}</p>
        <p className="details"><strong>salary: </strong>{formData.salary}</p>
    </div>  )
}

export default Details