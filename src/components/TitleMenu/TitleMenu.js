import React from 'react';
import { ReactComponent as WaveSvg } from './wave.svg';



export const TitleMenu = () => {
    return (
        <div>
            <div className='header'>
                <h1 className='main-title'>Devine la couleur</h1>
            </div>
            <WaveSvg className='wave'/>
        </div>
    )
}