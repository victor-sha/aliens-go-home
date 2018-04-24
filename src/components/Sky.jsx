import React from 'react';
import { skyAndGroundWidht } from '../utils/constants';

const Sky = () => {
    const skyStyle = { fill: '#30abef' };
    const gameHeight = 1200;

    return (
        <rect
         style={skyStyle}
         x={skyAndGroundWidht/-2}
         y={100 - gameHeight}
         width={skyAndGroundWidht}
         height={gameHeight}
        />
    );
}

export default Sky;