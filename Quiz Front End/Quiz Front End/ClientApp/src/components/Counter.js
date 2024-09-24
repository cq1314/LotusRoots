import React, { Component } from 'react';

export class Counter extends Component {
    static displayName = Counter.name;

    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            responses: [],
            showSurveyComplete: false,
        };
    }

    questions = [
        {
            questionText: 'What is your primary interest in visiting Japan?',
            answerOptions: [
                { answerText: 'Adventure' },
                { answerText: 'Relaxation' },
                { answerText: 'Educational' },
                { answerText: 'Culinary' },
            ],
        },
        {
            questionText: 'Which Japanese food do you like the most?',
            answerOptions: [
                { answerText: 'Sushi' },
                { answerText: 'Ramen' },
                { answerText: 'Tempura' },
                { answerText: 'Takoyaki' },
            ],
        },
        {
            questionText: 'What is your preferred transportation method?',
            answerOptions: [
                { answerText: 'Bullet trains (Shinkansen)' },
                { answerText: 'Walking or biking in local areas' },
                { answerText: 'Rental cars' },
                { answerText: 'Public buses or taxis' },
            ],
        },
        {
            questionText: 'What kind of accommodation would you prefer during your trip?',
            answerOptions: [
                { answerText: 'Traditional ryokan with hot springs' },
                { answerText: 'Modern luxury hotel' },
                { answerText: 'Budget hostel or capsule hotel' },
                { answerText: 'Airbnb or rental homes' },
            ],
        },
        {
            questionText: 'What’s the first thing you want to capture on your camera?',
            answerOptions: [
                { answerText: 'Ancient temples or shrines' },
                { answerText: 'Unique street food and markets' },
                { answerText: 'A stunning mountain view' },
                { answerText: 'Bustling city streets and lights' },
            ],
        },
        {
            questionText: 'Which Japanese craft would you like to try making?',
            answerOptions: [
                { answerText: 'Origami or pottery' },
                { answerText: 'Making sushi or soba noodles' },
                { answerText: 'Crafting natural soaps or lotions' },
                { answerText: 'Designing kawaii accessories' },
            ],
        },
        {
            questionText: 'How adventurous are you when it comes to food?',
            answerOptions: [
                { answerText: 'Open to trying traditional but familiar dishes' },
                { answerText: 'Excited to try street food, even if it’s unusual' },
                { answerText: 'Preferring comforting, healthy, or light meals' },
                { answerText: 'Game for anything, especially experimental cuisine' },
            ],
        },
        {
            questionText: 'What are you most excited about exploring in Japan?',
            answerOptions: [
                { answerText: 'Ancient temples and cultural sites' },
                { answerText: 'Street food and famous markets' },
                { answerText: 'Natural hot springs and mountains' },
                { answerText: 'Modern architecture and pop culture spots' },
            ],
        },
        {
            questionText: 'What type of Japanese architecture would you like to explore?',
            answerOptions: [
                { answerText: 'Historic castles and temples' },
                { answerText: 'Quaint, local food stalls and markets' },
                { answerText: 'Traditional inns and rural homes' },
                { answerText: 'Modern skyscrapers and innovative buildings' },
            ],
        },
        {
            questionText: 'What do you hope to gain from your trip to Japan?',
            answerOptions: [
                { answerText: 'A deeper understanding of Japanese history and tradition' },
                { answerText: 'A taste of Japan’s diverse food culture' },
                { answerText: 'A sense of peace and relaxation' },
                { answerText: 'A fast-paced adventure and memorable sights' },
            ],
        },
        // Add more survey questions as needed
    ];

    handleAnswerOptionClick = (answerText) => {
        this.setState((prevState) => ({
            responses: [...prevState.responses, answerText],
        }));

        const nextQuestion = this.state.currentQuestion + 1;
        if (nextQuestion < this.questions.length) {
            this.setState({
                currentQuestion: nextQuestion,
            });
        } else {
            this.setState({
                showSurveyComplete: true,
            });
        }
    };

    render() {
        return (
            <div style={styles.page}>
                <div style={styles.quiz}>
                    {this.state.showSurveyComplete ? (
                        <div style={styles.surveyCompleteSection}>
                            Thank you for completing the survey!
                            <div>Your result:</div>
                            <div style={styles.resultText}>Tokyo</div>
                            <img src="./tokyo.jpg" alt="Tokyo" style={styles.resultImage} />
                        </div>
                    ) : (
                        <>
                            <div style={styles.questionSection}>
                                <div style={styles.questionCount}>
                                    <span>Question {this.state.currentQuestion + 1}</span>/{this.questions.length}
                                </div>
                                <div style={styles.questionText}>
                                    {this.questions[this.state.currentQuestion].questionText}
                                </div>
                            </div>
                            <div style={styles.answerSection}>
                                {this.questions[this.state.currentQuestion].answerOptions.map((answerOption, index) => (
                                    <button
                                        key={index}
                                        onClick={() => this.handleAnswerOptionClick(answerOption.answerText)}
                                        style={styles.answerButton}
                                    >
                                        {answerOption.answerText}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

const styles = {
    page: {
        backgroundImage: 'url(/quizback.jpg)', // Use the correct path to your image
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
        minHeight: '100vh', // Ensure it covers the full viewport height
        margin: 0,
        padding: 0,
        display: 'flex', // Use flexbox to center content
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
       
    },
    quiz: {
        fontFamily: 'Apple Chancery',
        textAlign: 'center',
        padding: '60px',
        backgroundColor: 'rgba(300, 248, 255, 0.9)', // Slightly transparent background
        borderRadius: '10px',
        maxWidth: '1000px',
        margin: 'auto',
        height: '500px', // Adjust the height as needed
        zIndex: 2,
        marginTop: '50px', // Add this line to move the element lower
    },
    questionSection: {
        marginBottom: '10px',
    },
    questionCount: {
        marginBottom: '10px',
        fontSize: '18px',
        color: 'black',
    },
    questionText: {
        marginBottom: '20px',
        fontSize: '40px',
        color: 'black',
    },
    answerSection: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px', // Adjust the gap between buttons as needed
        maxWidth: '1200px', // Adjust based on the width of your buttons and desired layout
        margin: 'auto',
    },
    answerButton: {
        backgroundColor: '#FFB6C1', // Light pink color
        color: 'white',
        border: 'none',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '25px',
        width: '300px', // Set a fixed width for all buttons
        height: '90px',
        boxSizing: 'border-box', // Include padding and border in the element's total width and height
        textShadow: '1px 1px 1px black', // Thin black border around the letters
    },
    surveyCompleteSection: {
        fontSize: '24px',
        color: '#333',
    },
    resultText: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '20px',
    },
    resultImage: {
        marginTop: '15px',
        width: '350px', // Adjust the size as needed
        height: 'auto',
    },
};
