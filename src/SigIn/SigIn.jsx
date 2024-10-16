import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import './SignIn.css';
import { auth } from '../firebase';

export default function SigIn({ setPic }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already authenticated on page load or refresh
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setIsLoggedIn(true);
                setPic(user.photoURL);  // Set the profile picture
            } else {
                // No user is signed in
                setIsLoggedIn(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [setPic]);

    function googleLogin() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            setPic(result.user.photoURL);  // Set the profile picture
            setIsLoggedIn(true);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>{isLoggedIn ? "Welcome back!" : "Login"}</h2>
                {isLoggedIn ? (
                    <p>You are already logged in!</p>
                ) : (
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
                            
                        </div>
                        <button className="ebutton" type="submit">Log In</button>
                    </form>
                )}
                <p> <a href="#" onClick={googleLogin}>Register with Google</a></p>
            </div>
        </div>
    );
}
