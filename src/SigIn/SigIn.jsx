import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import React, { useState } from 'react';
import './SignIn.css'
import { auth } from '../firebase'

export default function SigIn({ setPic }) {
   
    function googleLogin() {
        const provider=new GoogleAuthProvider
    
        
     

        signInWithPopup(auth,provider).then(async(result)=>{
           console.log(result)
        
            setPic(result.user.photoURL); 
               
        })
    }
  return (
  
    // <div>


    //     <img onClick={googleLogin} src="https://imgs.search.brave.com/U_5dIedy4sWHrtyMgv33W7HLVfUQ78xFWU_yGOwvVtg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLXlwNHdv/RzNxLS0vY19saW1p/dCxmX2F1dG8sZmxf/cHJvZ3Jlc3NpdmUs/cV9hdXRvLHdfODAw/L2h0dHBzOi8vdGhl/cHJhY3RpY2FsZGV2/LnMzLmFtYXpvbmF3/cy5jb20vaS9kcGl5/dGFpaTVuZXpwdHdp/YmVtNC5wbmc" alt="noimg" />
    // </div>
    <div className="login-container">
    <div className="login-box">
        <h2>Login</h2>
        <form>
            <div className="input-group">
                <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
                <input type="password" placeholder="Enter your password" required />
            </div>
            <div className="remember-forgot">
                <label>
                    <input type="checkbox" />
                    Remember me
                </label>
                <a href="#">Forgot password?</a>
            </div>
            <button  className="ebutton" type="submit">Log In</button>
        </form>
        <p>Don't have an account? <a href="#" onClick={googleLogin}>Register</a></p>
    </div>
</div>
  )
}
 
