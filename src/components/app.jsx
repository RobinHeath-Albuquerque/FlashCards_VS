import React, { useState, useEffect } from 'react';
import "./styles.css";
import Card from "./Card";
import axios from 'axios';
//import FlashCardList from './FlashCardList';
//import NavBar from './NavBar/NavBar';
//import './App.css';



//function Top() {
    //return (
        //<div className="Top">
            //<NavBar />

        //</div>

        
   // )
//}


export default function App() {
    return (
        <div className="App">
            <h1>Technology Flash Cards</h1> 
            <h2>Click on the cards to begin.</h2>
            <h3>Frontend Technology Terms</h3>
            <Card frontSide="React js" backSide="An open-source, front end, JavaScript library for building user interfaces or UI components"/>
            <Card frontSide="HTML" backSide="Hyper Text Markup Language"/>
            <Card frontSide="CSS" backSide="Cascading Style Sheets"/>
            <Card frontSide="Create React App" backSide="Developer Shortcut to create React Apps"/>
            <Card frontSide="Axios" backSide="A library to make HTTP requests"/>
            <h1>Backend Technology Terms</h1>
            <Card frontSide="Python" backSide="An interpreted high-level general purpose programming language"/>
            <Card frontSide="Django Rest API Framework" backSide="A powerful and flexible toolkit for building Web APIs"/>
            <Card frontSide="MySQL" backSide="An open-source relational database management system"/>
        </div>

    )
}


