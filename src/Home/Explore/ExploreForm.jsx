import React, { useState } from 'react';
import { db } from '../../firebase'; // Import Firestore instance
import { doc, setDoc } from 'firebase/firestore'; // Modular Firestore imports
import './ExploreForms.css'; // Import CSS for styling

const ExplorerForm = () => {
    const [cuisineName, setCuisineName] = useState(''); // For storing document (cuisine) name
    const [chefName, setChefName] = useState(''); // For storing chef name
    const [ingredients, setIngredients] = useState(''); // For storing ingredients
    const [procedure, setProcedure] = useState(''); // For storing procedure

    // Function to add a new document with custom fields
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cuisineName.trim() === '' || chefName.trim() === '' || ingredients.trim() === '' || procedure.trim() === '') {
            alert('Please fill out all fields!');
            return;
        }

        // Reference to the new document with the provided cuisine name
        const docRef = doc(db, 'explore', cuisineName);

        // Set the fields in the newly created document
        await setDoc(docRef, {
            chefName,
            ingredients,
            procedure
        });

        // Clear the input fields
        setCuisineName('');
        setChefName('');
        setIngredients('');
        setProcedure('');
        alert('Recipe added successfully!');
    };

    return (
      <div className='cover'>
        <div className="form-container">
            <h2 className="form-title">Add New Recipe</h2>
            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-group">
                    <label>Cuisine Name:</label>
                    <input 
                        type="text" 
                        value={cuisineName} 
                        onChange={(e) => setCuisineName(e.target.value)} 
                        placeholder="Enter cuisine name" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Chef Name:</label>
                    <input 
                        type="text" 
                        value={chefName} 
                        onChange={(e) => setChefName(e.target.value)} 
                        placeholder="Enter chef name" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Ingredients:</label>
                    <textarea 
                        value={ingredients} 
                        onChange={(e) => setIngredients(e.target.value)} 
                        placeholder="List ingredients here" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Procedure:</label>
                    <textarea 
                        value={procedure} 
                        onChange={(e) => setProcedure(e.target.value)} 
                        placeholder="Write the procedure here" 
                        required 
                    />
                </div>

                <button type="submit" className="submit-btn">Submit Recipe</button>
            </form>
        </div>
        </div>
    );
};

export default ExplorerForm;
