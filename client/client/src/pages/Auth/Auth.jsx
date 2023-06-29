// import React, { useState } from 'react'
// import './Auth.css'
// import Logo from '../../img/logo.png'
// import {useDispatch, useSelector} from 'react-redux'
// import { logIn, signUp } from '../../actions/AuthAction'


// const Auth = () => {
//     const dispatch = useDispatch()
//     const loading = useSelector((state)=>state.authReducer.loading)
//     const [isSignUp, setIsSignUp] = useState(true)
//     console.log(loading)
//     const [data, setData] = useState({
//         firstname: "", 
//         lastname: "", 
//         username: "", 
//         password: "", 
//         confirmpass: "",
//     })

//     const [confirmPass, setConfirmPass] = useState(true)

//     const handleChange = (e) => {
//         setData({...data, [e.target.name]: e.target.value})
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if(isSignUp)
//         {
//            data.password === data.confirmpass
//            ? dispatch(signUp(data))
//            : setConfirmPass(false)
//         }else{
//             dispatch(logIn(data))
//         }
//     }

//     const resetForm =()=>{
//         setConfirmPass(true);
//         setData({
//             firstname: "", 
//             lastname: "", 
//             username: "", 
//             password: "", 
//             confirmpass: "",
//         });
//     }
    

//   return (
//     <div className="Auth">
//         {/*left side  */}
//         <div className="a-left">
//             <img src={Logo} alt="" />
//             <div className="webname">
//                 <h1>ZKC Media</h1>
//                 <h6>Explore the ideas throughout world</h6>
//             </div>
//         </div>
//         {/* Right side */}
//         <div className="a-right">
//             <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
//                 <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
               
//                     {isSignUp &&  
//                      <div>
//                         <input type="text" 
//                            placeholder='First Name' 
//                            className='infoInput' 
//                            name= 'firstname'
//                            onChange = {handleChange}
//                            value={data.firstname}
//                            />

//                         <input type="text"    
//                            placeholder='Last Name' 
//                            className='infoInput' 
//                            name= 'lastname'
//                            onChange = {handleChange}
//                            value={data.lastname}
//                         />
//                     </div> }
                   
//                 <div>
//                     <input type="text"
//                      className="infoInput"
//                      name= 'username'
//                      placeholder='Usernames' 
//                      onChange = {handleChange}
//                      value={data.username}
//                     />
//                 </div>
//                 <div>
//                     <input type="password" 
//                     className="infoInput" 
//                     name= 'password'
//                     placeholder='Password'
//                     onChange = {handleChange}
//                     value={data.password}
//                     />
//                 {isSignUp && 
//                   <input type="password" 
//                     className="infoInput" 
//                     name= 'confirmpass'
//                     placeholder='Confirm Password' 
//                     onChange = {handleChange}
//                     value={data.confirmpass}
//                     />}
                    
//                 </div>
//                  <span style={{display: confirmPass ? "none": "block", 
//                  color:'red', 
//                  fontSize: '12px', 
//                  alignSelf: 'flex-end', 
//                  marginRight: '5px',}}>
//                     * confirmpassword is not same
//                  </span>
//                 <div>
//                     <span style={{fontSize: '12px', cursor: "pointer"}} 
//                     onClick={()=>{setIsSignUp((prev)=> !prev); resetForm()}}>
//                         {isSignUp ? "Already have an account. Log In!" : "Don't have an account? Sign Up"}
//                     </span>
//                 </div>
//                 <button className="button infoButton" type='submit' disabled={loading}>
//                     {loading? "Loading" : isSignUp ? "SignUp" : "LogIn"}</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Auth


import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from './../../actions/AuthAction';


const Auth = () => {
  const [isSignUp, setIsSignUp] =useState(true)
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  console.log(loading)
  const [data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})
  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignUp)
    {
      data.password === data.confirmpass 
      ? dispatch(signUp(data)) 
      : setConfirmPass(false);
    } else
    {
      dispatch(logIn(data))
    }
  }
  
  const resetForm = () => {
    setConfirmPass(true)
    setData({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})
  }
  return (
    <div className="Auth">
      {/* Left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right side */}
      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

    
          {isSignUp &&
          <div>
            <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
          />
        </div>
}
         
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            onChange={handleChange}
            value={data.username}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
          />
          {isSignUp &&    
           <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={data.confirmpass}
          />}
       
        </div>
         <span style={{display: confirmPass? "none" : "block", color: 'red', fontSize: '12px', alignSelf: 'flex-end', marginRight: '5px'}}>
          *confirm Password is not same
         </span>
        <div>
            <span style={{cursor : "pointer", fontSize: '12px'}} onClick={()=> {setIsSignUp((prev)=> !prev); resetForm()}}>
              {isSignUp? "Already have an account. Login!" : "Don't have an account? Sign Up"}</span>
        </div>
        <button className="button infoButton" type="submit" disabled={loading}>
         {loading ? "Loading..." : isSignUp ? "Signup" : "Log In"}
          </button>
      </form>
    </div>
   
    </div>
  );
};

export default Auth;