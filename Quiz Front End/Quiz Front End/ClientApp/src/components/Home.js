import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

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
            <div style={styles.quiz}>
                {this.state.showSurveyComplete ? (
                    <div style={styles.surveyCompleteSection}>
                        Thank you for completing the survey!
                        <div>Your result:</div>
                        <div style={styles.resultText}>Tokyo</div>
                        <img src="path/to/your/image.jpg" alt="Tokyo" style={styles.resultImage} />
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
        );
    }
}


const styles = {
    quiz: {
        fontFamily: 'Georgia',
        textAlign: 'center',
        padding: '60px',
        backgroundColor: 'rgba(300, 248, 255, 0.9)', // Slightly transparent background
        borderRadius: '10px',
        maxWidth: '1000px',
        margin: 'auto',
        height: '500px', // Adjust the height as needed
        zIndex: 2,
    },
    questionSection: {
        marginBottom: '20px',
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
        height: '70px',
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
        marginTop: '20px',
        width: '200px', // Adjust the size as needed
        height: 'auto',
    },
};
