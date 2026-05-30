import React, { useState } from 'react'
import './App.css'
const Form = () => {
      let [input,SetInput]=      useState(
        {name:"",email:"",passWord:""})


    function fun1(e){
        // console.log("hello");
       let {name,value}=    e.target
       SetInput({...input,[name]:value})
        
        console.log(input);
        
        
        // console.log(e.target.value);
        
        
    }
  return (
    <div>
        <form>
            <input type='text' name='name' value={input.name}  onChange={fun1} placeholder='Enter your name'/>
            <br></br>
            <br></br>

            <input type='email'   name='email' value={input.email}  onChange={fun1} placeholder='Enter your email'/>
            <br></br>
            <br></br>

            <input type='email'  name='passWord' value={input.passWord}  onChange={fun1} placeholder='Enter your email'/>
            <br></br>
            <br></br>

            
            <button>Login</button>



        </form>
    </div>
  )
}

export default Form