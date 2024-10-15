import React, { useEffect, useState } from 'react';
import './ChinRecipe.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust path if necessary
import { Link } from 'react-router-dom'

export default function ChinRecipe({ setEd }) {
  const [dishes, setDishes] = useState([]);

  const getRecipe = (foodId) => {
    setEd(foodId);
  };

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const collectionRef = collection(db, 'food1');
        const querySnapshot = await getDocs(collectionRef);
        const dishesData = querySnapshot.docs.map(doc => doc.data());
        setDishes(dishesData);
        console.log(dishesData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div className="recipe-container">
      {dishes
        .filter(food1 => food1.Id < 10) // Filter to only include items with Id < 10
        .map((food1, index) => (
          <div key={index} className="recipe-card">
            <div className="image-container">
              <img src={food1.imageURL} alt="Dish" />
            </div>
            <div className="content">
              <h2 className="recipe-title">
                {food1.Id}.{food1.name}
                <img src={food1.type} alt="Additional" className="additional-image" />
              </h2>
              <p className="recipe-about">{food1.About}</p>
            </div>
            <div className="button-container">
              <Link to={`/ChGet/${food1.Id}`}>
                <button className="get-recipe-button" onClick={() => getRecipe(food1.Id)}>Get Recipe</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
