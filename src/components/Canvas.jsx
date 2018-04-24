import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonPipe from './CannonPipe';
import CannonBase from './CannonBase';

const Canvas = () => {
    const style = { border: '1px solid black' };
    const viewBox =  [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg
         id='aliens-go-home-canvas'
         preserveAspectRatio='zMaxYMax none'
         viewBox={viewBox}
         style={style}
        >
            <Sky/>
            <Ground/>
            <CannonPipe rotation={45}/>
            <CannonBase />
        </svg>
    );
};

export default Canvas;