import React, { useState, useEffect } from 'react';

const CollegeDirectory = () => {
    const [colleges, setColleges] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch college data from an API or local source
        const fetchColleges = async () => {
            const response = await fetch('/api/colleges'); // Replace with actual API endpoint
            const data = await response.json();
            setColleges(data);
        };

        fetchColleges();
    }, []);

    const filteredColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: '#2A2A2A', color: '#ECECEC', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
            <h1>College Directory</h1>
            <input
                type="text"
                placeholder="Search for colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #4682B4', backgroundColor: '#ECECEC', color: '#2A2A2A' }}
            />
            <ul>
                {filteredColleges.map(college => (
                    <li key={college.id}>
                        <h2>{college.name}</h2>
                        <p>{college.description}</p>
                        <p>Courses Offered: {college.courses.join(', ')}</p>
                        <p>Admission Process: {college.admissionProcess}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollegeDirectory;