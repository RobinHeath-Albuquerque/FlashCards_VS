import { render } from '@testing-library/react';
import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';


class App extends Component {
    constructor(props) {
        super(props);
        this.cards = [
            {title: 'React.js', definition: 'Open-source, front end, JavaScript Library for builing UX or UI components'},
            {title: 'HTML', definition: 'Hyper Text Markup Language'},
            {title: 'CSS', definition: 'Cascading Style Sheets'},
            {title: 'Create React App', definition: 'Tool to help developers create React apps'},
            {title: 'Axios', definition: 'Javascript library used to make HTTP requests'},

        ];
        this.state = {
            cardNumber: 0
        }
    }
    
    

    render(); {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row row-spacer"></div>
                <div className="col">
                    {/*Button here to move to next card*/}
                    </div>
                    <div className="col">
                        {/*Display card here*/}
                    </div>
                    <div className="col">
                        {/*Button here to move to previous card*/}

                    </div>
                </div>  
        

            

        );
    }
    
    


export default App;