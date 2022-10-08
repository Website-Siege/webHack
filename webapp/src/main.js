import React from 'react';
import './public/main.css';
import Navigation from './components/navbar';
import sauceIcon from './public/images/sauceicon.png';

function Main(){
    return(
        <div className='main'>
            <head>
                <title>Penguin Pears Inc.</title>
            </head>
            <nav>
                <Navigation />
            </nav>

            <div className='title' id='title'>
                    Ban Sauce Inc.
            </div>

            <div className='logoIcon'>

                <img src={sauceIcon} alt='Sauce Icon Placeholder' />

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