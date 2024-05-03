import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
// import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../../../../firebase/firebase';
// import { useAuth } from '../../context/AuthContext';
// import { Navigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../../../firebase/firebase';


const LoginPopup = ({setShowLogin}) => {

    // create state variable to store and use the state of the user login
    const [currState, setCurrState] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userDisplayName, setUserDisplayName] = useState(null);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setUserDisplayName(auth.currentUser.displayName);
            setShowLogin(false); //close the popup after sucessful login
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {displayName: name})
            setUserDisplayName(name);
            setShowLogin(false); //close the popup after sucessful login
        } catch (error){
            setError(error.message)
        }
    };


  return (
    <div className='login-popup'>
    <form className='login-popup-container' action="">
        <div className="login-popup-title">
            {!userDisplayName && (
                <h2>{currState}</h2>
            )}
            {userDisplayName && (
                <h2>Welcome, {userDisplayName}</h2>
            )}
            
            {!userDisplayName &&<img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />}
        </div>
        {currState === "Sign Up" && (
            <div className="login-popup-input">
                <input type="text" placeholder='Your Name' required value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
        )}

        <div className="login-popup-input">
            {/* {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>} */}
            <input type="email" placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
            {userDisplayName? null :
            (currState=="Sign Up"
            ?<button onClick={handleSignup}>Create Account</button>
            :<button  onClick={handleLogin}>Login</button>)
        }
        </div>

        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {error && <div className='login-popup-error'>{error}</div>}
        {currState==="Login"
        ?<p>Create a new account?{' '}<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account?{' '} <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
        
        
    </form>
</div>
  )
}

export default LoginPopup