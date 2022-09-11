import React from 'react';
import './public/main.css';
import Navigation from './components/navbar';

function Main(){
    return(
        <div className='main'>
            <head>
                <title>Penguin Pears Inc.</title>
            </head>
            <nav>
                <Navigation />
            </nav>
            <div>
                <p>
                    This website will be used for hacking
                </p>
            </div>
        </div>
    )
}

export default Main;