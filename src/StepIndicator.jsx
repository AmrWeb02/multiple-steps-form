import React from 'react'

const StepIndicator = (props) => {
    const getWidth =() =>{
        switch(props.step){
            case 2: return '66.66%';
            break;
            case 3: return '100%';
        }
    }
  return (
    <div className="stepIndicator">
        <div id="progress" style={{width: getWidth()}}></div>
        <div>Step 1</div>
        <div>Step 2</div>
        <div>Step 3</div>
        </div>
  )
}

export default StepIndicator