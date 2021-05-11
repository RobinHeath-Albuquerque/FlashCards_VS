import React, { useState, useEffect } from 'react';
import './app.css';
//import FlashCard from './FlashCard';
import axios from 'axios';
import FlashCardList from './FlashCardList';

function App() {
    const [flashcards] = useState(SAMPLE_FLASHCARDS)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/cards/')
        .then(res => {
            res.data.results.map((questionItem, index) => {
                return {
                    id: `${index}-${Date.now()}`,
                    questions: questionItem.code,
                    answer: questionItem.definition,
                }


            })
            console.log(res.data)
        })
        
        
    }, [])

    return (
        <FlashCardList flashcards={flashcards} />
    )
    }



    const SAMPLE_FLASHCARDS = [
        {
            id: 1,
            code: 'React js',
            definition: 'An open-source, front end, JavaScript library for building user interfaces or UI component',
        },
        {
            id: 2,
            code: 'Cakes',
            definition: 'A super yummy baked treat',
        }
    ]

    export default App;
   

