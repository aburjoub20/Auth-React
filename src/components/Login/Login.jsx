import React, { useState } from 'react'
import axios from 'axios'; // API 
import Joi, { func } from 'joi';// for validation
import { useNavigate } from 'react-router-dom'; //to move between components (route)

export default function Register() {

  let [errorList , setErrorList]=useState([]); //front end erorr msg
  let [errorMsg , setErrorMsg]=useState([]); // if you wanna show error from backend
  let[loading , setloading]= useState(false);//for change btn to spinner when submit 

  const navigator = useNavigate();
  function   gotohome(){
    let path = '/Home';
    navigator(path);
  }

 async function submitform(e){
    // alert('test');
    e.preventDefault();
    setloading(true);
    let validateform = validator();
    if(validateform.error){
      setErrorList(validateform.error.details);
      // alert(validateform.error.details);
      setloading(false);
    }
    else{
      //API 
      setloading(true);
      gotohome();
      let{data} =  await axios.post('',user)
      if(data.message=='success'){
        //login 
        console.log(data);
        setloading(false);

      }
      else{
        setErrorMsg(data.message);
      }
    }    
      setloading(false);

    // console.log(validateform);
  }

  let [user , setUser]=useState({ //useState to show data from console to view 
    password:'',
    email:'',
  })

function validator(){
  const schema = Joi.object({
    email :Joi.string().required(),
    password: Joi.string().required() // Regax code on react Joi
});
return schema.validate(user,{abortEarly:false});//abortEarly use to check all form not first iteam
}
function getFormvalue(e){
  let  myUser = {...user};
  myUser[e.target.name]=e.target.value; // to get data by name=""
setUser(myUser);

  console.log(myUser); // to set copy for parent let 

}
  function change(e){
console.log(e.target.value);
  }
  return (
<form onSubmit={submitform}>
  {errorList.map( (error, index)=>

  <div key={index} className='alert alert-danger'>{error.message}</div> 
  )}
  <div className="form-group">
    <label htmlFor="email">Eamil</label>
    <input onChange={getFormvalue} type="email" className="form-control" id="email" aria-describedby="emailHelp"name='email' />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input onChange={getFormvalue} type="text" className="form-control" id="password" aria-describedby="emailHelp" name='password'/>
  </div>

  <button type="submit" className="btn btn-primary float-l eft">
    {loading?<i className='fa fa-spinner fa-spin'></i>:'Login'}
    </button>
</form>
  )
}
