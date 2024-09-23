import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <div className="image-container">
                    <img src={require('../assets/pinklogo4.png')} alt="Japanese Culture" className="top-image" />
                </div>
                <div className="bottomtext">
                    <h3>Find Your Roots</h3>
                </div>
                <div className="image1-container">
                    <img src={require('../assets/adobe1.jpeg')} alt="Full Width" className="image1" />
                    <div className="overlay">
                        <p>Explore Japan's Beauty</p>
                    </div>
                </div>
                <div className="image2-container">
                    <img src={require('../assets/adobe2.jpeg')} alt="Full Width" className="image2" />
                    <div className="overlay">
                        <p>Explore Japan's Cuisine</p>
                    </div>
                </div>
                <div className="image3-container">
                    <img src={require('../assets/adobe3.jpeg')} alt="Full Width" className="image3" />
                    <div className="overlay">
                        <p>Explore Japan's Culture</p>
                    </div>
                </div>

                <div className="information">
                    <p>When it comes to embarking on a captivating journey into the rich and diverse tapestry of Japanese culture, the possibilities can seem overwhelming. However, thanks to a multitude of dedicated organizations across every state, you have a direct gateway to the cultural experiences that resonate with you the most. These organizations are committed to providing invaluable resources, connections, and opportunities, enabling you to fully immerse yourself in the traditions and beauty of Japanese culture.</p>
                    <br></br>
                    <br></br>
                    <p>Here, we are enthusiastic about facilitating your cultural exploration, offering valuable guidance and insights to assist you in discovering the ideal organizations for your interests. With a simple click of ‘learn more,’ you can access comprehensive lists of organizations conveniently grouped by state, making it effortless to connect with the cultural encounters you yearn for. So why wait? Embark on your exploration today and quench your thirst for knowledge and adventure!</p>
                    <button className="explore-button">Learn More</button>
                </div>
            </>
        );
    }
}
