import React, { Component } from 'react';
import './About-Us.css';

export class AboutUs extends Component {
    static displayName = AboutUs.name;

    render() {
        return (
            <>
                <div className="pink-block"></div>
                <div className="pink-block2"></div>
                <div className="pink-block3"></div>
                <div className="firsttext">
                    <h1></h1>
                </div>
                <div className="firstinformation">
                    <p>Our mission is to consolidate resources and information regarding Japanese culture in the United States, starting with the southeastern region. Our plan is to grow to encompass the entire United States. We aim to provide information on events, organizations, and culture in general.</p>
                    <br />
                    <br />
                    <p>We strive not only to provide information but also to offer insight into the community. Our articles cover recent events and the Japanese culture community as a whole, and we provide reviews of local Japanese establishments and experiences.</p>
                </div>
                <div className="secondtext">
                    <h1></h1>
                </div>
                <div className="secondinformation">
                    <p>We strive for the extraordinary! Our passion is to share the wonders of Japanese culture with people everywhere, inspiring them to embark on their own explorations and spread the beauty of these traditions far and wide.</p>
                    <br />
                    <p>Let us not be content with the ordinary, but seek out and create experiences that are truly amazing. Together, we can enrich our lives and the lives of others by embracing the richness of Japanese culture and all the wisdom and beauty it has to offer. So let us aim high and always remember that the greatest experiences are waiting for us to discover them!</p>
                </div>
                <div className="quarter-screen-container">
                    <div className="text-and-image">
                        <div className="centered-text">
                            <h1>OUR MISSION</h1>
                        </div>
                        <img src={require('../assets/pinkumbrella.jpeg')} className="centered-image" alt="Pink Umbrella" />
                    </div>
                </div>
                <div className="quarter-screen-container2">
                    <div className="text-and-image">
                        <div className="centered-text">
                            <h1>EXPERIENCE THE</h1>
                            <br />
                            <h1>EXTRAORDINARY</h1>
                        </div>
                        <img src={require('../assets/pinktree.jpeg')} className="centered-image" alt="Pink Tree" />
                    </div>
                </div>
                <div className="quarter-screen-container3">
                    <h1>CONTACT US</h1>
                </div>
                <div className="contact-form">
                    <input type="text" placeholder="Name" className="short-input" />
                    <input type="email" placeholder="Email" className="short-input" />
                    <textarea placeholder="Your Question" className="long-input"></textarea>
                    <button className="question-button">Submit Question</button>
                </div>
            </>
        );
    }
}
