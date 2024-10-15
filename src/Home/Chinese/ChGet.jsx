import React, { useEffect, useState } from 'react';
import './ChGet.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust path if necessary
import { useParams } from 'react-router-dom';

export default function ChGet({ Ed }) {
  const { id } = useParams();
  const [dish, setDish] = useState({}); // Initialize as an object
  const [servings, setServings] = useState(1); // State for servings input

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const q = query(collection(db, "food1"), where("Id", "==", Number(id)));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0]; // Get the first document
          console.log(doc.data());
          setDish(doc.data());
        } else {
          console.error("No matching documents.");
        }
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDishes();
    console.log(id);
  }, [id]);

  // Function to handle servings change
  const handleServingsChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setServings(value); // Update servings state based on input
    }
  };

  // Function to increment servings
  const incrementServings = () => {
    setServings(prev => prev + 1);
  };

  // Function to decrement servings
  const decrementServings = () => {
    if (servings > 1) {
      setServings(prev => prev - 1);
    }
  };

  // Function to extract the number from a string
  const extractNumber = (str) => {
    const match = str.match(/\d+/); // Extracts the number from the string
    return match ? Number(match[0]) : 0; // Convert the matched string to a number
  };

  // Function to get multiplied items and remove original number
  const getMultipliedItems = (items) => {
    return items.map(item => {
      const number = extractNumber(item);
      const newNumber = number * servings;
      const newItem = item.replace(number, ''); // Remove the original number
      return `${newNumber} ${newItem}`.trim(); // Add the multiplied number in front
    });
  };

  return (
    <div className='ot'>
      <div className="containerr">
        <div className="lefft-section">
          {dish.imageURL && <img src={dish.imageURL} alt={id} />} {/* Check if imageURL exists */}
        </div>
        <div className="right-section">
          <div className="top-right">
            <div className="servings">
              <div className="servings-label">Servings: </div>
              <div className="servings-input-container">
                <button className="servings-button" onClick={decrementServings}>-</button>
                <input
                  type="number"
                  id="servings-input"
                  value={servings}
                  min="1"
                  onChange={handleServingsChange} // Handle manual input change
                />
                <button className="servings-button" onClick={incrementServings}>+</button>
              </div>
            </div>
            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul>
                {dish.ingridients && getMultipliedItems(dish.ingridients).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bottom-right">
            <p>{dish.procedure}</p> {/* Add a field to display description or other info */}
          </div>
        </div>
      </div>
    </div>
  );
}
