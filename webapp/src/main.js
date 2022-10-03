import React from 'react';
import './public/main.css';
import Navigation from './components/navbar';

function Main(){
    return(
        <div className='main'>
            <head>
                <title>Ban Sauce Inc.</title>
            </head>
            <nav>
                <Navigation />
            </nav>

            <div className='title' id='title'>
                    Ban Sauce Inc.
            </div>

            <div className='logoIcon'>
    
                <img src='sauceicon.png' alt='placeholder' />
            
            </div>

            <div className='contentOne'>
                S Tier Sauce
                
            </div>

            <div className='contentTwo'>
                The Sauce to Sauce Up Your Sauce
            </div>


        </div>
        
    )
}

export default Main;