import React, { useState } from 'react';

const Chatbot: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [responses, setResponses] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetchAIResponse(userInput);
        setResponses([...responses, `You: ${userInput}`, `Bot: ${response}`]);
        setUserInput('');
    };

    const fetchAIResponse = async (input: string): Promise<string> => {
        // Placeholder for AI backend communication
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`This is a response to "${input}"`);
            }, 1000);
        });
    };

    return (
        <div style={{ backgroundColor: '#2A2A2A', color: '#ECECEC', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
            <h2>Career Advisor Chatbot</h2>
            <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
                {responses.map((response, index) => (
                    <div key={index}>{response}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Ask me anything about your career..."
                    style={{ width: '80%', padding: '10px', borderRadius: '5px', border: '1px solid #4682B4', backgroundColor: '#ECECEC', color: '#2A2A2A' }}
                />
                <button type="submit" style={{ padding: '10px 15px', borderRadius: '5px', border: 'none', backgroundColor: '#4682B4', color: '#ECECEC', cursor: 'pointer' }}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chatbot;