import React from 'react';
import { Link } from 'react-router-dom';

export const NavButtons = (props) => {

    return (
        <div className='nav-buttons-container'>
            <Link className='link' to={props.buttonOneAction} ><button className='nav-button'>{props.buttonOne}</button></Link>
            <button className='nav-button' onClick={props.buttonTwoAction}>{props.buttonTwo}</button>
        </div>
    )
}
