import './Form.css'
import Swal from 'sweetalert2'
import React, {useState} from 'react'
// Components
import StepIndicator from './StepIndicator'
import NextBtn from './NextBtn'
import BackBtn from './BackBtn'
import SendBtn from './SendBtn'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Details from './Details'
const Form = () => {
    const [step, setStep] = useState(1);
    const [validity, setValidity] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        job: '',
        salary: 60000,
    })
    const [focusState, setFocusState] = useState({
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
    })
    const [errors, setErrors] = useState({});
    const focusHandler = (field,e) =>{
        console.log("Focused!");
        e.target.classList.add("focused");
        // e.target.style.border="1px solid green";
        // e.target.style.outline="none";
        setFocusState( (prev)=> { return {...prev, [field]:true } } );
    }
    const blurHandler = (field,e) =>{
        if(e.target.value===""){
            console.log("Blured!");
            e.target.classList.remove("focused");
            // e.target.style.border="";
            setFocusState( (prev)=>({...prev, [field]:false}))
        }
    }
    const nextHandler = () =>{
        if(pageOneValidate()){
            setStep( (prevState)=> prevState+1);
        }
    }
    const backHandler = () =>{
        setStep( (prevState)=> prevState-1)
    }
    const sendHandler = (e) =>{
        e.preventDefault();
        console.log("Form Submitted!");
        Swal.fire({
            title: "Success!",
            text: "Your form has been submitted successfully!",
            icon: "success"
          })
        setValidity(true);
    }
    const changeHandler = (e) =>{
        setFormData((prevFormState) =>({...prevFormState, [e.target.name]:e.target.value}));
        setErrors((prevErrorState)=>({...prevErrorState, [e.target.name]:undefined}))
        console.log(e.target.value);
        console.log(formData);
    }
    const pageOneValidate = ()=>{
        let isValid =true;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(formData);
        if(formData.firstname.trim() === ""){
            isValid=false;
            setErrors((prevErrors) => ({ ...prevErrors, firstname: "First Name is missing" }));
        }
        if(formData.lastname===""){
            isValid=false;
            setErrors((prevErrors) => ({ ...prevErrors, lastname: "Last Name is missing" }));
        }
        if(formData.phone==="" ||  !phoneRegex.test(formData.phone.trim())) {
            isValid=false;
            setErrors((prevErrors) => ({ ...prevErrors, phone: "10-digit number is required" }));
        }
        if(formData.email==="" || !emailRegex.test(formData.email)){
            isValid=false;
            setErrors((prevErrors) => ({ ...prevErrors, email: "Use valid email address" }));
        }
        if(step===2){
            if(formData.job===""){
                isValid=false;
                setErrors((prevErrors) => ({ ...prevErrors, job: "Must select a job" }));
            }
        }
        console.log(isValid);
        console.log(errors);
        return isValid;
    }
  return (
    <>
    { !validity && <form>
        <StepIndicator step={step}/>
        {step===1 && <PageOne formData={formData} errors={errors} focusState={focusState} focusHandler={focusHandler} blurHandler={blurHandler} changeHandler={changeHandler}/>}
        {step===2 && <PageTwo formData={formData} errors={errors} changeHandler={changeHandler}/>}
        {step===3 && <PageThree formData={formData} changeHandler={changeHandler}/>}
        <div className='btnWrapper'>
            {step>1 && <BackBtn step={step} onClick={backHandler}/>}
            { step <3 && <NextBtn step={step} onClick={nextHandler}/>}
        </div>
        { step===3 && <SendBtn onClick={sendHandler}/>}
        {/* <input type="submit" value={ step===3? "Submit":"Next"} /> */}
    </form>}
    { validity && <Details formData={formData}/>}
    </>
  )
}

export default Form