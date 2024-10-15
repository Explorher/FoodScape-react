import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Ensure your Firebase config is correct
import './ExploreCuisines.css';

const ExploreCuisines = ({ setname }) => {
    const [cuisines, setCuisines] = useState([]);
    
    useEffect(() => {
        const fetchCuisines = async () => {
            const cuisinesCollection = collection(db, 'explore');
            const snapshot = await getDocs(cuisinesCollection);
            setCuisines(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })));
        };
        fetchCuisines();
    }, []);

    const click = (id) => {
        setname(id); 
        console.log(id)
     
    };

    return (
        <div className="explore-container">
            <div className="card add-cuisine">
                <Link to="/explore">
                    <h3>Add Cuisine</h3>
                </Link>
            </div>
            {cuisines.map((cuisine, index) => (
                <div key={index} className="card cuisine-card">
                    <h3>Cuisine Name: {cuisine.id}</h3>
                    <p>Chef Name: {cuisine.data.chefName}</p>
                    
                    <Link to={`/exploree/${cuisine.id}`}>
                        <button onClick={() => click(cuisine.id)} className="get-recipe-button">Get Recipe</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ExploreCuisines;
