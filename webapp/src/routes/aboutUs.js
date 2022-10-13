import React from 'react';
import '../public/about.css';
import Navigation from '../components/navbar';
import saseLogo from '../public/images/sase.png';
import Footer from '../components/footer';

function About(){
    return(
        <div className='about'>
            <nav>
                <Navigation />
            </nav>
            
            <h1 className='title'>
                <center>
                    Ban Sauce  
                </center>
            </h1>


            <p className='dash'>
                <center>
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    
                    
                </center>
                <center><img src = {saseLogo} alt="" className='photo' /></center>
                
            </p>
            
            

            <p className='introduction'>

                <center>
                    For our Kickstarter project, we decided to simulate website hacking. We first create a website with user's login info(user name and password)
                    We then split into two teams, Defence team focuses on how they can secure the website. Attack team will try to hack the website(steal user's login info)
                    A battle between the two teams, if the Defence team were able to stop the Attack team from getting the user's info under a certain amount of time, then 
                    the Defence wins. 
                    If the Attack team is able to get user's login info successfully then the Attack team wins. 
                    
                </center>
            </p>

            <p className='MeetUs'>
                <center>Meet Us</center>
            </p>
            
            {/*<img src = {saseLogo} alt="" className='photo' />*/}

            <p className='section'>
                <h2 className='names'>
                    Marlon Burog(MJ)
                </h2>
                <ul className='bulletPoint'>
                    <li>Sophomore</li>
                    <li>Major: Software Engineer</li>
                    <li>Experienced in Kickstarter</li>
                    <li>Hobbies: Boxing/Coding/Martial Arts</li>
                </ul>
            </p>

            <p className='section'>
                <h2 className='names'>
                    Brandon Ritchie
                </h2>
                <ul className='bulletPoint'>
                    <li>Sophomore</li>
                    <li>Major: Computer Engineer</li>
                    <li>First time participating in Kickstarter</li>
                    <li>Hobbies: Archery/Gaming/Driving</li>
                </ul>
            </p>

            <p className='section'>
                <h2 className='names'>
                    Austin Huang
                </h2>
                <ul className='bulletPoint'>
                    <li>Sophomore</li>
                    <li>Major: Computer Engineer</li>
                    <li>First time participating in Kickstarter</li>
                    <li>Hobbies: Archery/Basketball/Watching Anime/Music</li>
                </ul>
            </p>

            <p className='section'>
                <h2 className='names'>
                    Benjamin Filoteo
                </h2>
                <ul className='bulletPoint'>
                    <li>Sophomore</li>
                    <li>Major: Applied Mathematics</li>
                    <li>First time participating in Kickstarter</li>
                    <li>Hobbies: Minecraft/Sleep/Drinking Milk(not kidding)</li>
                </ul>
            </p>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default About;