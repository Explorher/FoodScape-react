import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Navbar({ pic, setPic, user }) {  // Assuming 'user' is passed as a prop
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const handleSignOut = (e) => {
        e.preventDefault();  // Prevent default link behavior
        signOut(auth)
            .then(() => {
                setPic(null);  // Clear the user profile picture after sign-out
                console.log("User signed out");
                navigate('/Login');  // Redirect to the Login page after signout
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        <div className={`App ${drawerOpen ? 'drawer-open' : ''}`}>
            <header>
                <div className="left-section">
                    <div className="logoo">
                        <img src={pic} alt="Profile" className="overlay" />
                    </div>

                    <div className="brand-text">
                        <Link className='brand' to="/">FoodScape</Link>
                    </div>
                    
                    <nav className="nav-desktop">
                        <Link to="/">Home</Link>
                        <Link to="/product">Products</Link>
                        {user ? (  // Render Signout link only if user is logged in
                            <Link to="/" onClick={handleSignOut}>Signout</Link>
                        ) : (
                            <Link to="/Login">SignIn</Link>
                        )}
                    </nav>
                </div>
                
                <div className="search-container">
                    <input type="text" placeholder="Search" />
                    <button className="search-button">Search</button>
                </div>
                
                <nav className={`drawer ${drawerOpen ? 'open' : ''}`}>
                    <button className="drawer-back-button" onClick={toggleDrawer}>&larr;</button>
                    <Link to="/" onClick={closeDrawer}>Home</Link>
                    <Link to="/product" onClick={closeDrawer}>Products</Link>
                    <Link to="/Login" onClick={closeDrawer}>Signin</Link>
                    <Link to="/Signup" onClick={closeDrawer}>Signup</Link>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
