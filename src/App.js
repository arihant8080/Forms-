 import React,{useState} from "react";

 function App(){
  const[values,setValues]=useState({firstName:"",lastName:"",email:""});
  
  const[submitted,setSubmitted]=useState(false);

  const[valid,setValid]=useState(false);

  const handleFirstNameInputChange=(event)=>{
    setValues({...values,firstName:event.target.value })
  }
  
  const handleLastNameInputChange=(event)=>{
    setValues({...values,lastName:event.target.value })
  }
  
  const handleEmailInputChange=(event)=>{
    setValues({...values,email:event.target.value })
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
        setSubmitted(true)
  }

  return(
    <div className="form-container">
      <form className="registed-form" onSubmit={handleSubmit}>
      
        {submitted&&valid?<div className="success-message">{values.firstName} Thank you for registrating</div>:null}

        <input onChange={handleFirstNameInputChange} value={values.firstName}
         className="form-field" placeholder="First Name" name="firstName"/>
         <br/>
        {submitted && !valid ? <span> plase enter firstName </span>:null}
         <br/>

         <input onChange={handleLastNameInputChange} value={values.lastName}
         className="form-field" placeholder="Lirst Name" name="lastName"/>
          <br/>
        {submitted && !valid ? <span> plase enter lastName </span>:null}

          <br/>
        
          <input onChange={handleEmailInputChange} value={values.email}
         className="form-field" placeholder="Email" name="email"/>
          <br/>
        {submitted && !valid ? <span> plase enter email </span>:null}

          <br/>

          <button className="form-field" type="submit">Register</button>


      </form>
    </div>
  )

 }

export default App;
