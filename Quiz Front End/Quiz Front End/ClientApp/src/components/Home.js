import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div style={styles.home}>
                
            </div>
        );
    }
}

const styles = {
    home: {
        fontFamily: 'Georgia',
        textAlign: 'center',
        padding: '60px',
       // Slightly transparent background
        borderRadius: '10px',
        maxWidth: '1000px',
        margin: 'auto',
        height: '500px', // Adjust the height as needed
        zIndex: 2,
        marginTop: '50px', // Add this line to move the element lower
        fontSize: '40px', // Adjust the font size as needed
        color: 'black', // Adjust the text color as needed
    },
};
