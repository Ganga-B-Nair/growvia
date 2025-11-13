import React, { useState } from 'react';

const AptitudeQuiz = () => {
    const [questions] = useState([
        {
            question: "What subjects do you enjoy the most?",
            options: ["Math", "Science", "Arts", "Literature"]
        },
        {
            question: "Do you prefer working alone or in a team?",
            options: ["Alone", "In a team"]
        },
        {
            question: "How do you handle challenges?",
            options: ["I seek help", "I try to solve it myself", "I give up"]
        }
    ]);

    const [answers, setAnswers] = useState(Array(questions.length).fill(''));

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        // Logic to evaluate the answers and provide results
        console.log("User Answers: ", answers);
    };

    return (
        <div style={{ backgroundColor: '#2A2A2A', color: '#ECECEC', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(10px)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}>
            <h2>Aptitude Quiz</h2>
            {questions.map((q, index) => (
                <div key={index}>
                    <p>{q.question}</p>
                    {q.options.map((option, i) => (
                        <label key={i}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option}
                                checked={answers[index] === option}
                                onChange={() => handleAnswerChange(index, option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit} style={{ backgroundColor: '#4682B4', color: '#ECECEC', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                Submit
            </button>
        </div>
    );
};

export default AptitudeQuiz;