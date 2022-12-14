import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../navbar';
import Footer from '../footer';
import Signin from './components/username';
import Bio from './bio';
import Link from './links';
import FactCard from './facts';
import '../../public/user.css';

class User extends React.Component{
    render() {
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
                            <p>{this.props.name}</p>
                        </div>
                        <div className='d-flex flex-column align-items-end'>
                            <Signin name="Austin Filoteo" />
                            <button onClick={this.props.logOut}>Logout</button>
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
}

export default User;