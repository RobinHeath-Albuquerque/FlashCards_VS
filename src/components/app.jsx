import React, { useState } from 'react';
import "./styles.css";
//import Card from "./Card";
//import axios from 'axios';
import FlashCardList from './FlashCardList';

function App() {
    const [flashcards] = useState(SAMPLE_FLASHCARDS)
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
            definition: 'A super yummy bakes treat',
        }
    ]

    export default App;
   

