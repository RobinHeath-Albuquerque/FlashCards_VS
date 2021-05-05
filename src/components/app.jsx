import React, { useState } from 'react';
import FlashCardList from './FlashCardList';


function App() {
    const [flashcards] = useState(Sample_FlashCards)
    return (
        <FlashCardList flashcards={flashcards} />
    );
}

const Sample_FlashCards = [
    {
        id:1,
        question: 'React.js',
        answer: 'Open-source, front end, JavaScript Library for builing UX or UI components'

    },
    {
        id:2,
        question: 'HTML',
        answer: 'Hyper Text Markup Language'

    },
    {
        id:3,
        question: 'Css',
        answer: 'Cascading Style Sheets'

    }
]


export default App;