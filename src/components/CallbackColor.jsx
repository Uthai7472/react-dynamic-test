import React, { useState } from 'react'

const CallbackColor = ({ getColor, isLoading }) => {
    const [activeColor, setActiveColor] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        console.log(value);
        if (e.key === 'Enter') {
            e.preventDefault();
            getColor(value);
            console.log(value);
        }
        // if (value === 'Uthai') {
        //     setActiveColor(value);
        //     getColor('red');
        // } else {
        //     setActiveColor(value);
        //     getColor('white');
        // }
    }

    const handleColor = (color) => {
        // e.preventDefault();
        getColor(color);
        setActiveColor(color);
    }

    const preventFormOnClick = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <form action="">
            <input type="text"
            id='input'
            aria-label='input'
            onChange={handleChange}
            onKeyDown={handleChange}
            value={activeColor} />
            <button onClick={(e) => { preventFormOnClick(e); handleColor('green');}} disabled={isLoading}>Green</button>
            <button onClick={(e) => { preventFormOnClick(e); handleColor('blue');}} disabled={isLoading}>Blue</button>
        </form>
    </div>
  )
}

export default CallbackColor