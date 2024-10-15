import   './Home.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function Home() {
    return(
        <>
         <div className="grid-container">
            <div className="grid-item">
                <Link to="/chinese" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/chinese.jpg?alt=media&token=df4bc921-f8fb-48e7-8edb-c285dd7435fb" alt="Indian Cuisine" />
                </Link>
                <div className="caption">Chinese Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/French">
                    <img src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/french.jpg?alt=media&token=8eb5db14-b9fa-40a8-952a-7344fcea7e47" alt="Italian Cuisine" />
                </Link>
                <div className="caption">French Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/indian">
                   <img src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/indian.jpg?alt=media&token=1bf58041-4b7a-48e9-ab95-6494728c9fe1" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Indian Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/italian">
                    <img src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/italian.jpg?alt=media&token=c8820e32-8dc9-4088-aed9-250e66418c02" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Italian Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/japanese">
                    <img src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/japanese.jpg?alt=media&token=7fdf94a2-f82c-4580-b7e3-70a4f17be49e" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Japanese Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/mexican">
                    <img src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/mexican.jpg?alt=media&token=7e770e8c-8a2b-4208-9411-6928f83d4066" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Mexican Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/middle">
                    <img src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/mEast.jpg?alt=media&token=8e9325b4-jfpj-40fb-b780-b68f570084c8" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Middle-East Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/thai">
                    <img src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/thailand.jpg?alt=media&token=6d5bd302-c4cc-4069-a632-8e579e72d260" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Thailand Cuisine</div>
            </div>

            <div className="grid-item">
                <Link to="/cuisine">
                    <img  src="https://firebasestorage.googleapis.com/v0/b/foodscape-react.appspot.com/o/explore.jpg?alt=media&token=ac2b5347-e09f-43b2-8067-ebb0dba6a8dd" alt="Italian Cuisine" />
                </Link>
                <div className="caption">Explore Cuisine</div>
            </div>

                      

            
        </div>
     

        </>
    )
    
}
export default Home