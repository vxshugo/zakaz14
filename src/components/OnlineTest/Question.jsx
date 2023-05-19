import React from 'react'
import "./Question.css"
const Question = ({ question, options, handleAnswer }) => {
    return (
        <div className='Question'>
            <h1>{question}</h1>
            <ul>
                {options.map((option, index) => (
                    <li key={index} onClick={() => handleAnswer(index)}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;