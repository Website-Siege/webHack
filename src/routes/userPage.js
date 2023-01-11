import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import Signin from '../components/userComponents/components/username';
import Bio from '../components/userComponents/bio';
import Link from '../components/userComponents/links';
import FactCard from '../components/userComponents/facts';
import '../public/user.css';

function User(){
    return(
        <div className='user'>
            <nav>
                <Navigation />
            </nav>

            <div className='heading'>
            <Container>
                <div className='row d-flex flex-row flex-wrap justify-content-start'>
                    <section className='mt-3'>
                        <div className='d-flex flex-column align-items-start'>
                            <img alt="pfp" />
                            <p>First, Last</p>
                        </div>
                        <div className='d-flex flex-column align-items-end'>
                            <Signin name="Austin Filoteo" />
                            <button>Temp Button</button>
                        </div>
                    <br />
                    </section>
                </div>
            </Container>
            </div>
            <div className='body'>
                <br />
                    <div className='d-flex flex-row flex-wrap flex-grow-1 justify-content-center'>
                        <div className='d-flex flex-column-reverse justify-content-between' style={{ padding:'10px'}}>
                            <Bio />
                            <br />
                            <Link />
                        </div>
                        <div className='d-flex flex-column justify-content-evenly' style={{ padding:'10px'}}>
                            <FactCard />
                        </div>
                    </div>
            <br />
            <br />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default User;