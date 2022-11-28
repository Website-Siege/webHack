import React from 'react';
import '../public/about.css';
import Navigation from '../components/navbar';
import saseLogo from '../public/images/sase.png';
import grandma from '../public/images/grandma.jpg';
import Footer from '../components/footer';

function About(){
    return(
        <section className = "header">
        <div className='about'>
            <nav>
                <Navigation />
            </nav>
            <br></br>

            <p className='dash'>
                <center><img src = {saseLogo} alt="" className='photo' /></center>                
            </p>
            
            
            <p className="objective">
                <center>
                    <b>Objective</b>
                </center>
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
        </div>

        <section className = "team">
                    <h1>Meet Us</h1>

            <div class="row">
                <div class="col">
                    <img src = {grandma}></img>
                    <div class="layer">
                        <h3> Marlon "Mj" Burog</h3>
                        <p>
                        He's like that
                        </p>
                    </div>
                </div>
                <div class="col">
                    <img src = {grandma}></img>
                    <div class="layer">
                        <h3> Marlon "Mj" Burog</h3>
                        <p>
                        He's like that
                        </p>
                    </div>
                </div>
                <div class="col">
                    <img src = {grandma}></img>
                    <div class="layer">
                        <h3> Marlon "Mj" Burog</h3>
                        <p>
                        He's like that
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <img src = {grandma}></img>
                    <div class="layer">
                        <h3> Marlon "Mj" Burog</h3>
                        <p>
                        He's like that
                        </p>
                    </div>
                </div>
                <div class="col">
                    <img src = {grandma}></img>
                    <div class="layer">
                        <h3> Marlon "Mj" Burog</h3>
                        <p>
                        He's like that
                        </p>
                    </div>
                </div>
                <div class="col">
                    <img src = {grandma}></img>
                    <div class="layer">
                        <h3> Marlon "Mj" Burog</h3>
                        <p>
                        He's like that
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default About;