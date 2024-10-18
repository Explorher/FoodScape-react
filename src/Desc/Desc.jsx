import React from "react";
import "./Desc.css";
import { Link, useNavigate } from "react-router-dom";

export default function Desc({ user }) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate("/Home");
    } else {
      alert("Please log in to access recipes.");
      navigate("/Login");
    }
  };

  return (
    <>
      <section className="promo-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>
            Foodscape leverages international culinary standards&nbsp;
            <span className="highlight">to provide personalized recipes</span>
            <br />
           
          </h1>

          <p className="para">
            By assessing various culinary parameters such as ingredients,
            cooking techniques, and user preferences, Foodscape provides
            personalized insights to enhance your cooking experience. Our app
            aligns these factors to create a seamless and efficient meal
            preparation process, offering actionable suggestions to optimize
            recipe selection.
          </p>

          <div className="buttons">
            {/* Get Started Button with conditional navigation */}
            <button onClick={handleGetStarted} className="btn">
              Get Started
            </button>

            {/* Play Button */}
            <Link to="/Home" className="play-btn">
              <div className="play-icon">▶</div>
            </Link>
          </div>
        </div>
      </section>

      <div className="wrapper">
        <div className="grid-cards">
          {/* Recipe Card */}
          <div className="card-container">
            <div className="gradient-wrapper green-gradient">
              <img src="recipe-image.jpg" alt="Recipe" />
              <h3 className="text-title">Recipe</h3>
              <p className="text-description">
                Find personalized recipes tailored to your taste and dietary preferences.
              </p>
              {/* Conditionally render "Read More" based on authentication */}
              {user ? (
                <Link to="/Home" className="read-more-btn">
                  <p className="no">Read More</p>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="read-more-btn"
                  onClick={() => alert('Please log in to access recipes.')}
                >
                  <p className="no">Read More</p>
                </Link>
              )}
            </div>
          </div>

          {/* Login Card */}
          <div className="card-container">
            <div className="gradient-wrapper blue-gradient">
              <img src="login-image.jpg" alt="Login" />
              <h3 className="text-title">Login</h3>
              <p className="text-description">
                Access exclusive features and save your preferences.
              </p>
              <Link to="/Login" className="read-more-btn">
                <p className="no">Login</p>
              </Link>
            </div>
          </div>

          {/* Culinary News Card */}
          <div className="card-container">
            <div className="gradient-wrapper yellow-gradient">
              <img src="news-image.jpg" alt="Culinary News" />
              <h3 className="text-title">Culinary News</h3>
              <p className="text-description">
                Stay updated with the latest culinary trends and news from around the world.
              </p>
              <Link to="/news" className="read-more-btn">
                <p className="no">Read More</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
