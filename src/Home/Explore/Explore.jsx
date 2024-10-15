import React, { useEffect, useState } from 'react';
import './Explore.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust path if necessary
import { useParams } from 'react-router-dom';

export default function Explore({ name }) {

  const [exploreItems, setExploreItems] = useState([]); // Initialize state for explore items
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const { id } = useParams();
  
  useEffect(() => {
    const fetchExploreItems = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const cuisinesCollection = collection(db, "explore");
        const q = query(cuisinesCollection, where("__name__", "==", id)); // Use __name__ to filter by document ID
        
        const querySnapshot = await getDocs(q);

        // Check if any documents were returned
        if (querySnapshot.empty) {
          console.warn(`No documents found for ID: ${name}`); // Log if no documents were found
        }

        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Log fetched items for debugging
        console.log("Fetched items:", items);

        setExploreItems(items); // Set state with fetched items
      } catch (error) {
        console.error("Error fetching documents: ", error);
        setError(error); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (name) { // Check if name is defined before fetching
      fetchExploreItems();
    }
  }, [name]); // Added 'name' as a dependency to refetch when it changes

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Show error message if there was an error
  }

  return (
    <div className='recipe-container'>
      <div className="recipe-content">
        <h2>Explore Dishes</h2> {/* Title for the section */}

        <div className="explore-items">
          {exploreItems.length > 0 ? (
            exploreItems.map((item, index) => (  // Added index parameter for key
              <div key={item.id} className="explore-card"> {/* Use item.id as the key */}
                <h3>{item.chefname}</h3> {/* Display chef's name */}
                <h4>Ingredients:</h4>
                <p>{item.requirement}</p> {/* Display ingredients in paragraph format */}
                <h4>Procedure: </h4>
                <p>{item.procedure}</p> {/* Display procedure */}
              </div>
            ))
          ) : (
            <p>No dishes found for the provided ID:{name}.</p> // Display message if no items match the filter
          )}
        </div>
      </div>
    </div>
  );
}
