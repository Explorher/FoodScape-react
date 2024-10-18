import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './News.css';

const News= () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const querySnapshot = await getDocs(collection(db, "programs"));
      setPrograms(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchPrograms();
  }, []);

  return (
    <div className="programs-container">
      {programs.map((program, index) => (
        <div key={index} className="feeding-program-container">
          <div className="text-content">
            <h2>{program.topic}</h2>
            <p>{program.para1}</p>
            <p>{program.para2}</p>
            <p>{program.para3}</p>
            <a href="#" className="cta-link">Know more</a>
          </div>
          <div className="iimage-container">
            <img src={program.imageUrl} alt="Feeding Program" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
