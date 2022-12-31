import React from 'react';
import '../public/about.css';
import Navigation from '../components/navbar';
import saseLogo from '../public/images/sase.png';
import Footer from '../components/footer';
import AboutCard from '../components/aboutCard';
import Austin from '../public/images/members/austin.jpg';
import Ben from '../public/images/members/ben.jpg';
import Brandon from '../public/images/members/brandon.JPG';
import Kyle from '../public/images/members/kyle.jpg';
import Mj from '../public/images/members/mj.JPG';
import Tyler from '../public/images/members/tyler.JPEG';

function About(){
    return(
        <div className="header">
            <div className='about'>
                <nav>
                    <Navigation />
                </nav>
                <br />
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
            <div className="team bg-dark bg-gradient text-white">
                <h1>Meet Us</h1>
                <div className='d-flex flew-row flex-wrap flex-grow-1 justify-content-center justify-content-evenly'>
                    <div className='topRow d-flex flex-row flex-wrap flex-grow-1 justify-content-center justify-content-evenly'>
                        <AboutCard memPic={Mj} member={'Mj'} position={'Team Lead'} context={'Second year software engineering major '} />
                        <AboutCard memPic={Brandon} member={'Brandon'} position={'Software Dev'} context={'Second year computer engineering major'} />
                        <AboutCard memPic={Ben} member={'Ben'} position={'Software Dev'} context={'Second year applied mathematics/CS'} />
                    </div>
                    <div className='botRow d-flex flex-row flex-wrap flex-grow-1 justify-content-center justify-content-evenly'>
                        <AboutCard memPic={Austin} member={'Austin'} position={'Software Dev'} context={'Second year computer engineering major'} />
                        <AboutCard memPic={Tyler} member={'Tyler'} position={'Software Dev'} context={'Second year software engineering major'} />
                        <AboutCard memPic={Kyle} member={'Kyle'} position={'Software Dev'} context={'First year computer engineering major'} />
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default About;