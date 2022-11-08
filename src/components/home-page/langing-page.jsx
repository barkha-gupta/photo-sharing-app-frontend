import React from 'react'; 
import { Link } from 'react-router-dom';
import lens from "../../images/lens.png"
import "./landing-page.css";

const LandingPage= () =>{
    return(
        <div>
            <div className="home-page-container">
                <div className="image-container">
                        <img className='home-page-image' src={lens} alt="images"></img>
                </div>
                
                <div className="enter-column">
                    <div className='heading'>Team 10x 04</div>
                    <div className='enter'>
                        <button className='enter-btn'>
                            <Link className='btn' to="/insta" >
                                Enter
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;