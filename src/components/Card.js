import React, {useState} from 'react';



export default function Card({ frontSide, backSide }) {
    const [text, setText] = useState(frontSide);
    function handleClick() {
        setText(oldState => {
            if (oldState === frontSide) {
                return backSide;
            } else {
                return frontSide;
            }
        });
    }
    return <div className="flash-card" onClick={handleClick}>{text}</div>;
}