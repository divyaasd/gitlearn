import React, { useState , useEffect } from "react";
import './register.css'
import { RegisterApi } from "../services/api";
import { storeData } from "../services/storage";

import { Navigate , useNavigate } from 'react-router-dom';
import { isAuthenticated } from "../services/auth";

export default function RegisterPage(){

    const initialStateErrors={
        email:{required:false},
        password:{required:false},
        name:{required:false},
        custom_error:null
    }
  const [errors,setErrors]=  useState(initialStateErrors)
    const [loading,setLoading] =useState(false);
    const [inputs,setInputs]=useState({
            id:0,
            email:'',
            password:'',
            name:''
        })



    const handleSubmit=(event)=>{
        event.preventDefault();
        let errors=initialStateErrors;
        let hasError=false;
        
        if (inputs.name==='') {
            errors.name.required=true
            hasError=true
        }
        if (inputs.email==='') {
            errors.email.required=true
            hasError=true
        }
        if (inputs.password==='') {
            errors.password.required=true
            hasError=true
        }

            if (!hasError) {
                //send api request
                setLoading(true)
                RegisterApi(inputs).then((res)=>{
                    storeData(res.data.id);
                    console.log(res);
                })
                .catch((err)=>{console.log("Error",err);})
                .finally(()=>{
                    setLoading(false)
                })
                
            }

        setErrors(errors)
    }

        const handleInputs=(event)=>{
            setInputs({...inputs,[event.target.name]:event.target.value})


        }
    //     const navigate=useNavigate()
    
    

    //     const isAuthenticated=()=>{
    //         return getUserData()!=null?true:false;
    //     }
       

    //    useEffect(()=>{
    //     if (isAuthenticated()) {
    //         //redirect to dashboard
    //         return <Navigate to='/dashboard' replace={true}/>
            
    //     }
        
    //    },[navigate])
        // const navigate = useNavigate();
        // const  dashboard = () =>{
        //     navigate('/dashboard')
        // }

     if (isAuthenticated()) {
            //redirect to dashboard
            return <Navigate to='/dashboard' replace={true}/>
            
        }
    return (
       <>
        <section className="register-block">
        <div className="container">
           <div className="row ">
              <div className="col register-sec">
                 <h2 className="text-center">Register Now</h2>

                 <form className="register-form" onSubmit={handleSubmit} action="" >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
      
                    <input type="text" className="form-control" name="name" id="" onChange={handleInputs} />
                   { errors.name.required?   //required==true
                    (<span className="text-danger" >
                        Name is required.
                    </span>):null
                    }
                 </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                    <input type="text"  className="form-control" name="email" id="" onChange={handleInputs} />
                    
                    { errors.email.required? 
                    (<span className="text-danger" >
                        Email is required.
                    </span>):null
                    }
                 </div>
                 <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                    <input  className="form-control" type="password"  name="password" id="" onChange={handleInputs} />
                   
                    { errors.password.required? 
                   ( <span className="text-danger" >
                        Password is required.
                    </span>):null
                    }
                 </div>
                 <div className="form-group">
                 <span className="text-danger" >

                 { errors.custom_error? 
                      ( <p>Custom Error Message!</p>):null
                 }
                    </span>

                 

                    <div  className="text-center">

                    {loading?  
                      (<div className="spinner-border text-primary " role="status">
                      </div>):null
                        }
                    </div>
      
                   
                    <input type="submit" className="btn btn-login float-right" id='reg' disabled={loading}  value="Register"/>
                 
                 </div>
                 <div className="clearfix"></div>
                 <div className="form-group">
                   Already have account ? Please <a href="#">Login</a>
                 </div>
      
      
                 </form>

      
              </div>
      
           </div>
        
      
        </div>
      </section>
                        
       </>    
       )
}