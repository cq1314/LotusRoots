import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <img src={require('../assets/lotuslogo.jpg')} alt="Japanese Culture" className="top-image" />
                <div className="home-background">
                    <h2>YOUR CONNECTION TO JAPANESE CULTURE</h2>
                    <br></br>
                    <h1>FIND YOUR ROOTS</h1>
                </div>
            </>
        );
    }
}
