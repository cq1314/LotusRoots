import React, { Component } from 'react';
import { jsPDF } from 'jspdf';


export class Counter extends Component {
    static displayName = Counter.name;

    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            responses: [],
            showSurveyComplete: false,
            questions: this.getRandomQuestions(),
            itinerary: "Overview: Day 1: Visit Senso-ji Temple and Asakusa. Day 2: Explore Shibuya and Shinjuku. Day 3: Take a day trip to Mount Fuji.",
            itineraryDownload: "Day 1: Landmarks and Shopping\n\n\
Morning:\n\
- Osaka Castle: Explore this iconic historical site and stroll through Osaka Castle Park.\n\
- Namba Yasaka Shrine: Visit this unique shrine with its famous lion-shaped stage.\n\n\
Afternoon:\n\
- Dotonbori District: Dive into Osaka’s street food culture and enjoy the vibrant atmosphere.\n\
- Shinsaibashi Shopping Street: Spend time shopping along this bustling street.\n\n\
Evening:\n\
- Umeda Sky Building: Get a 360° view of the city from the Floating Garden Observatory.\n\
- Enjoy dinner at one of the nearby restaurants.\n\n\n\
Day 2: Temples and Traditional Osaka\n\n\
Morning:\n\
- Shitennoji Temple: Visit one of Japan’s oldest Buddhist temples.\n\
- Osaka Museum of History: Learn about the rich history of Osaka.\n\n\
Afternoon:\n\
- Kuromon Ichiba Market: Savor fresh seafood and local street food for lunch.\n\
- Sumiyoshi Taisha Shrine: Explore this grand Shinto shrine, known for its distinctive architectural style.\n\n\
Evening:\n\
- Shinsekai District: Experience Osaka's retro vibes and have dinner, sampling the famous kushikatsu skewers.\n\n\n\
Day 3: Modern Attractions and Leisure\n\n\
Morning:\n\
- Osaka Aquarium Kaiyukan: Visit one of the world’s best aquariums.\n\
- Tempozan Ferris Wheel: Take a ride for amazing views of the city and harbor.\n\n\
Afternoon:\n\
- Universal Studios Japan (USJ): Enjoy exciting attractions like The Wizarding World of Harry Potter or Super Nintendo World.\n\
- Alternatively, visit the Osaka Science Museum and National Museum of Art for a cultural experience.\n\n\
Evening:\n\
- Abeno Harukas: End your trip with stunning city views from Japan’s tallest skyscraper and a memorable dinner."

        };
    }
  
    // Function to shuffle the questions array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to get ten random questions
    getRandomQuestions() {
        const shuffledQuestions = this.shuffleArray([...this.questions]);
        return shuffledQuestions.slice(0, 10);
    }
//Question Code
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
        {
            questionText: 'What pace of travel do you prefer?',
            answerOptions: [
                { answerText: 'Fast-paced, lots of activities' },
                { answerText: 'Moderate, a good balance of relaxation and sightseeing' },
                { answerText: 'Slow-paced, with a focus on deep experiences' },
                { answerText: 'Flexible, I adjust based on the moment' },
            ],
        },
        {
            questionText: 'Are you interested in Japanese pop culture (e.g., anime, video games, fashion)?',
            answerOptions: [
                { answerText: 'Very much' },
                { answerText: 'Somewhat' },
                { answerText: 'Not really' },
                { answerText: 'Not at all' },
            ],
        },
        {
            questionText: 'What kind of natural scenery do you prefer?',
            answerOptions: [
                { answerText: 'Mountains and forests' },
                { answerText: 'Beaches and coastal areas' },
                { answerText: 'Countryside and rolling hills' },
                { answerText: 'Urban parks and gardens' },
            ],
        },
        {
            questionText: 'Do you enjoy participating in outdoor sports or adventures?',
            answerOptions: [
                { answerText: 'Yes, hiking, skiing, or water sports' },
                { answerText: 'Yes, but only occasionally' },
                { answerText: 'No, I prefer indoor activities' },
                { answerText: 'I’m open to new experiences' },
            ],
        },
        {
            questionText: 'What kind of climate do you prefer?',
            answerOptions: [
                { answerText: 'Cool and mild' },
                { answerText: 'Warm and tropical' },
                { answerText: 'Varied, with distinct seasons' },
                { answerText: 'It doesn’t matter, I can adapt' },
            ],
        },
        // Add more survey questions as needed
    ];
    handleAnswerOptionClick = (answerText) => {
        this.setState((prevState) => ({
            responses: [...prevState.responses, answerText],
        }));

        const nextQuestion = this.state.currentQuestion + 1;
        if (nextQuestion < this.state.questions.length) {
            this.setState({
                currentQuestion: nextQuestion,
            });
        } else {
            // Add a pause before showing the survey complete message
            setTimeout(() => {
                this.setState({
                    showSurveyComplete: true,
                });
            }, 3000); // 2000 ms = 2 second pause
        }
    };


    // Function to create a downloadable itinerary file
    createDownloadLink = () => {
        const doc = new jsPDF();
        doc.text(this.state.itineraryDownload, 10, 10);
        doc.save("itinerary.pdf");
    };

    render() {
        const { questions, currentQuestion, showSurveyComplete, itinerary } = this.state;

        return (
            <div style={styles.page}>
                <div style={styles.quiz}>
                    {showSurveyComplete ? (
                        <div style={styles.surveyCompleteSection}>
                            Thank you for completing the survey!
                            <div>Your result:</div>
                            <div style={styles.resultText}>Osaka</div>
                            <img src="./Osaka.jpg" alt="Osaka" style={styles.resultImage} />
                            <div style={styles.itinerary}>
                                <p>Osaka is Japan's third-largest city, known for its vibrant urban culture, historic landmarks, and culinary delights. Located on the southern coast of Japan’s main island, Honshu, it has been a key economic and cultural hub for centuries.</p>
                                <h2>Your Itinerary:</h2>
                                <p>{itinerary}</p>
                                <button onClick={this.createDownloadLink}>Download Full Itinerary</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div style={styles.questionSection}>
                                <div style={styles.questionCount}>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                {questions[currentQuestion] && (
                                    <div style={styles.questionText}>
                                        {questions[currentQuestion].questionText}
                                    </div>
                                )}
                            </div>
                            <div style={styles.answerSection}>
                                {questions[currentQuestion] && questions[currentQuestion].answerOptions.map((option, index) => (
                                    <button key={index} onClick={() => this.handleAnswerOptionClick(option.answerText)}>
                                        {option.answerText}
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#F7F3F0',
    },
    quiz: {
        width: '70%', // Increase the quiz width to make it bigger
        backgroundColor: '#fff',
        padding: '30px', // Increase padding for more space
        borderRadius: '15px', // Make the corners more rounded
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', // Increase shadow for more depth
    },
    questionSection: {
        marginBottom: '30px', // Increase margin for spacing
    },
    questionCount: {
        marginBottom: '15px',
    },
    questionText: {
        fontSize: '24px', // Increase font size for questions
        fontWeight: 'bold',
    },
    answerSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: { // New style for buttons
        backgroundColor: '#ffcccb', // Light pink background
        color: '#000', // Black text color for contrast
        padding: '15px 20px', // Add padding for bigger buttons
        border: 'none', // Remove default borders
        borderRadius: '10px', // Rounded corners
        fontSize: '18px', // Increase button text size
        marginBottom: '10px', // Spacing between buttons
        cursor: 'pointer',
        transition: 'background-color 0.3s', // Smooth hover effect
    },
    buttonHover: { // Button hover effect
        backgroundColor: '#ff9999', // Darker pink on hover
    },
    surveyCompleteSection: {
        textAlign: 'center',
    },
    resultText: {
        fontSize: '28px', // Make result text larger
        fontWeight: 'bold',
    },
    resultImage: {
        width: '60%',
        height: 'auto',
        marginTop: '20px',
    },
    itinerary: {
        marginTop: '20px',
        textAlign: 'left',
    },
};


export default Counter;

/*
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
        {
            questionText: 'What pace of travel do you prefer?',
            answerOptions: [
                { answerText: 'Fast-paced, lots of activities' },
                { answerText: 'Moderate, a good balance of relaxation and sightseeing' },
                { answerText: 'Slow-paced, with a focus on deep experiences' },
                { answerText: 'Flexible, I adjust based on the moment' },
            ],
        },
        {
            questionText: 'Are you interested in Japanese pop culture (e.g., anime, video games, fashion)?',
            answerOptions: [
                { answerText: 'Very much' },
                { answerText: 'Somewhat' },
                { answerText: 'Not really' },
                { answerText: 'Not at all' },
            ],
        },
        {
            questionText: 'What kind of natural scenery do you prefer?',
            answerOptions: [
                { answerText: 'Mountains and forests' },
                { answerText: 'Beaches and coastal areas' },
                { answerText: 'Countryside and rolling hills' },
                { answerText: 'Urban parks and gardens' },
            ],
        },
        {
            questionText: 'Do you enjoy participating in outdoor sports or adventures?',
            answerOptions: [
                { answerText: 'Yes, hiking, skiing, or water sports' },
                { answerText: 'Yes, but only occasionally' },
                { answerText: 'No, I prefer indoor activities' },
                { answerText: 'I’m open to new experiences' },
            ],
        },
        {
            questionText: 'What kind of climate do you prefer?',
            answerOptions: [
                { answerText: 'Cool and mild' },
                { answerText: 'Warm and tropical' },
                { answerText: 'Varied, with distinct seasons' },
                { answerText: 'It doesn’t matter, I can adapt' },
            ],
        },
        // Add more survey questions as needed
    ];
*/
