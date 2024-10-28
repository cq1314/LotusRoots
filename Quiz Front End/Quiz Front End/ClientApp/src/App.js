/*import React, { useEffect, useState } from 'react';

function SurveyQuestions() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/surveyquestions/')
            .then(response => response.json())
            .then(data => setQuestions(data));
    }, []);

    return (
        <div>
            <h1>Survey Questions</h1>
            <ul>
                {questions.map(question => (
                    <li key={question.id}>{question.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default SurveyQuestions;*/
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
            </Layout>
        );
    }
}
