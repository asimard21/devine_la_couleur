import React from 'react'
import { Link } from 'react-router-dom'

export const MainButton = () => {
    return (
        <div className='main-button-container'>
            <Link to='/questions' className='link'><button className='main-button'>Questions</button></Link>
            <Link to='/cards' className='link'><button className='main-button'>Cartes</button></Link>
        </div>
    )
}