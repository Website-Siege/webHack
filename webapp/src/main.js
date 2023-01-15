import React from 'react';
import './public/main.css';
import './public/index.css';
import Navigation from './components/navbar';
import Card from './components/cardDefault';
import { useNavigate } from 'react-router-dom';

function Main(){
    const nav = useNavigate();
    const route = () => {
        nav('/contact');
    }
    return(
        <div>
            <div className='bannerSection' >
                <nav>
                    <Navigation />
                </nav>
                    <div style={{paddingTop: '0px'}}></div>
                        <h1>Banana Sauce You Can Count On</h1>
                        <button className='mainButt' onClick={route}>Contact Us to Order</button>
                        <div style={{paddingBottom: '33px'}}></div>
                    </div> 
                <div className='cardSection bg-dark bg-gradient'>
                <br />
                <br />
                <div className='d-flex flex-row flex-wrap justify-content-evenly'>
                    <div className='d-flex flex-column'>
                        <Card title={"Jufran mmmmm "} content={"Sweet banana sauce: contact to order"}/>
                        <br />
                    </div>
                    <div className='d-flex flex-column'>
                        <Card style={{paddingBottom: '10px'}} title={"that other brand"} content={"Sweet banana sauce: contact to order"}/>                            
                        <br />
                    </div>
                </div>
                <br />
                <br />
                <br />
                </div>
        </div>
    )
}

export default Main;