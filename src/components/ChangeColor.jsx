import React, { useEffect, useState } from 'react'
import './ChangeColor.css';
import CallbackColor from './CallbackColor';
import Loading from './Loading';

const ChangeColor = () => {
    const [UIcolor, setUIcolor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getColor = (color) => {
        setIsLoading(true);
        setUIcolor(null);

        setTimeout(() => {
            setIsLoading(false);
            setUIcolor(color);
        }, 2000);
    }
 

  return (
    <div>
        <div className={`color-box ${isLoading ? 'blur' : ''}`}
        style={{backgroundColor: UIcolor}}></div>

        <div className={isLoading ? 'blur' : ''}>
            <CallbackColor getColor={getColor} isLoading={isLoading} />
        </div>

        { isLoading && (
            <Loading />
        )}
    </div>
  )
}

export default ChangeColor